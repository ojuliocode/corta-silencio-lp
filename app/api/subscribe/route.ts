import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ success: false, message: "Email inválido" }, { status: 400 })
    }

    // Aqui você pode integrar com seu serviço de email preferido
    // Exemplos: Mailchimp, SendGrid, ConvertKit, etc.

    // Por enquanto, vamos apenas simular o sucesso
    // Em um ambiente de produção, você substituiria isso por uma chamada real à API

    console.log(`Email inscrito: ${email}`)

    // Simula um pequeno atraso para dar feedback ao usuário
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json(
      {
        success: true,
        message: "Email adicionado à lista de espera com sucesso!",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Erro ao processar inscrição:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Ocorreu um erro ao processar sua inscrição. Tente novamente mais tarde.",
      },
      { status: 500 },
    )
  }
}

