import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { PosterFormData } from '@/types/posterForm';

const FileUpload: React.FC<Pick<PosterFormData, "selectedFile" | "setSelectedFile" | "coop" | "setCoop">> = ({ selectedFile, setSelectedFile, coop, setCoop }) => {
  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    setImage: (img: string | null) => void
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const base64 = await toBase64(file);
      setImage(base64);
    } else {
      setImage(null);
    }
  };

  const renderPreview = (src: string | null) => {
    if (src) {
      return <img src={src} alt="preview" className="rounded border max-w-xs mt-2" />;
    }
    return null;
  };

  return (
    <div className="file-upload space-y-4">
      <div>
        <Label htmlFor="content-image">Слика</Label>
        <Input
          id="content-image"
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, setSelectedFile)}
        />
        {renderPreview(selectedFile)}
      </div>

      <div>
        <Label htmlFor="coop-image">Коорганизатор</Label>
        <Input
          id="coop-image"
          type="file"
          accept="image/*"
          onChange={(e) => handleFileChange(e, setCoop)}
        />
        {renderPreview(coop)}
      </div>
    </div>
  );
};

export default FileUpload;
