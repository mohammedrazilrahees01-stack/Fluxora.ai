'use client';

import { useState } from 'react';

type PromptInputProps = {
  placeholder?: string;
  buttonText?: string;
  onSubmit?: (value: string) => void;
};

export default function PromptInput({
  placeholder = 'Type your request...',
  buttonText = 'Send',
  onSubmit,
}: PromptInputProps) {
  const [value, setValue] = useState('');

  function handleSubmit() {
    const text = value.trim();
    if (!text) return;

    onSubmit?.(text);
    setValue('');
  }

  return (
    <div className="glass flex gap-3 rounded-3xl p-3">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSubmit();
        }}
        placeholder={placeholder}
        className="flex-1 rounded-2xl bg-white/5 px-4 py-3 outline-none"
      />

      <button
        onClick={handleSubmit}
        className="rounded-2xl bg-blue-500 px-5 py-3 font-semibold transition hover:scale-105"
      >
        {buttonText}
      </button>
    </div>
  );
}