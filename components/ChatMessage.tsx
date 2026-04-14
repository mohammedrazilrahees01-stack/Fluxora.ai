type ChatMessageProps = {
  role: 'user' | 'ai';
  message: string;
};

export default function ChatMessage({
  role,
  message,
}: ChatMessageProps) {
  const isUser = role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-2xl rounded-3xl px-4 py-3 ${
          isUser
            ? 'bg-blue-500 text-white'
            : 'glass text-zinc-100'
        }`}
      >
        <p className="whitespace-pre-wrap leading-relaxed">
          {message}
        </p>
      </div>
    </div>
  );
}