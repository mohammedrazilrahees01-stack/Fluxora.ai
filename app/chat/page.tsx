'use client';

import { useState } from 'react';
import AppShell from '@/components/AppShell';
import ChatMessage from '@/components/ChatMessage';
import PromptInput from '@/components/PromptInput';
import PageHeader from '@/components/PageHeader';

type Message = {
    role: 'user' | 'ai';
    message: string;
};

export default function ChatPage() {
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'ai',
            message:
                'Welcome to Fluxora. Ask me to build, code, automate, write, or improve anything.',
        },
    ]);

    const [loading, setLoading] = useState(false);

    async function handleSend(text: string) {
        const userMessage: Message = {
            role: 'user',
            message: text,
        };

        setMessages((prev) => [...prev, userMessage]);
        setLoading(true);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: text }),
            });

            const data = await res.json();

            setMessages((prev) => [
                ...prev,
                {
                    role: 'ai',
                    message: data.reply || data.error || 'No response received.',
                },
            ]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                {
                    role: 'ai',
                    message: 'Something went wrong while contacting AI.',
                },
            ]);
        } finally {
            setLoading(false);
        }
    }

    return (
        <AppShell>
            <div className="space-y-6">
                <PageHeader
                    title="AI Chat"
                    description="Your live AI workspace powered by Fluxora."
                />

                <div className="glass flex h-[70vh] flex-col rounded-3xl p-4">
                    <div className="flex-1 space-y-4 overflow-y-auto pr-2">
                        {messages.map((item, index) => (
                            <ChatMessage
                                key={index}
                                role={item.role}
                                message={item.message}
                            />
                        ))}

                        {loading && (
                            <ChatMessage
                                role="ai"
                                message="Thinking..."
                            />
                        )}
                    </div>

                    <div className="mt-4">
                        <PromptInput
                            placeholder="Ask Fluxora anything..."
                            buttonText="Send"
                            onSubmit={handleSend}
                        />
                    </div>
                </div>
            </div>
        </AppShell>
    );
}