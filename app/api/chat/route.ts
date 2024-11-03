import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { message }: { message: string } = await request.json();

  const response = await fetch('http://10.29.201.170:5000/ask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({question: message}),
  });

  
  if (response.status !== 200) {
    return NextResponse.json({ reply: '抱歉，我现在不能回答你的问题。' /* + response.status + response.text */});
  }
  const data = await response.json();
  return NextResponse.json({ reply: data.answer });
}