import React, { useState } from 'react';
import { UploadCloud, CheckCircle2, FileText, Trash2 } from 'lucide-react';
import { Button } from './Button';

export interface FileUploadProps {
  label: string;
  required?: boolean;
  helperText?: string;
  accept?: string;
  maxSizeMB?: number;
  onFileSelect?: (file: File | null) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  label,
  required = false,
  helperText = 'Supported formats: PDF, JPG, PNG (Max 2MB)',
  maxSizeMB = 2,
  onFileSelect
}) => {
  const [selectedFile, setSelectedFile] = useState<{ name: string; size: string } | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const handleSimulatedUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile({
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`
      });
      if (onFileSelect) onFileSelect(file);
    }
  };

  const handleRemove = () => {
    setSelectedFile(null);
    if (onFileSelect) onFileSelect(null);
  };

  return (
    <div className="gov-form-group">
      <label className="gov-label">
        {label}
        {required && <span className="gov-label-required" aria-hidden="true">*</span>}
      </label>

      {!selectedFile ? (
        <div
          style={{
            border: `2px dashed ${dragOver ? 'var(--color-brand-primary)' : 'var(--color-border)'}`,
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-24)',
            textAlign: 'center',
            backgroundColor: dragOver ? 'var(--color-brand-subtle)' : 'var(--color-bg-page)',
            cursor: 'pointer',
            transition: 'all var(--transition-fast)'
          }}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
              const file = e.dataTransfer.files[0];
              setSelectedFile({
                name: file.name,
                size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`
              });
              if (onFileSelect) onFileSelect(file);
            }
          }}
        >
          <input
            type="file"
            id={`upload-${label.toLowerCase().replace(/\s+/g, '-')}`}
            style={{ display: 'none' }}
            onChange={handleSimulatedUpload}
            accept=".pdf,.jpg,.jpeg,.png"
          />
          <label
            htmlFor={`upload-${label.toLowerCase().replace(/\s+/g, '-')}`}
            style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
          >
            <UploadCloud size={32} color="var(--color-brand-primary)" />
            <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-brand-dark)' }}>
              Click to browse or drag &amp; drop document
            </span>
            <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
              {helperText}
            </span>
          </label>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 'var(--space-12) var(--space-16)',
            backgroundColor: 'var(--color-semantic-success-subtle)',
            border: '1px solid #BADBCC',
            borderRadius: 'var(--radius-md)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <FileText size={24} color="var(--color-semantic-success)" />
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-brand-dark)' }}>
                {selectedFile.name}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                {selectedFile.size} • Verified &amp; Ready for submission
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={handleRemove} title="Remove file">
            <Trash2 size={16} color="var(--color-semantic-error)" />
          </Button>
        </div>
      )}
    </div>
  );
};
