import React, { useContext, useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { UserContext } from "../app";

export default function ImageUploader({ onUploaded, onUploadStateChange }) {
  const user = useContext(UserContext);
  const [progress, setProgress] = useState(0);

  const onBrowse = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!user) {
      console.warn(" No user found, cannot upload");
      return;
    }

    const path = `posts/${user.uid}/${Date.now()}-${file.name}`;

    const task = uploadBytesResumable(ref(storage, path), file);

    if (onUploadStateChange) onUploadStateChange(true);

    task.on(
      "state_changed",
      (snap) => {
        const pct = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(pct);
      },
      (err) => {
        if (onUploadStateChange) onUploadStateChange(false);
      },
      async () => {
        try {
          const url = await getDownloadURL(task.snapshot.ref);
          if (onUploaded) onUploaded(url); 
        } catch (err) {
          console.error("Error getting download URL:", err);
        }
        if (onUploadStateChange) onUploadStateChange(false);
      }
    );
  };

  return (
    <div>
      <input type="file" onChange={onBrowse} />
      {progress > 0 && progress < 100 && (
        <p>Uploading… {progress.toFixed(0)}%</p>
      )}
    </div>
  );
}
