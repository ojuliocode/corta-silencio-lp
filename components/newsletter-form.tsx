"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

interface NewsletterFormProps {
  darkMode?: boolean
}

export default function NewsletterForm({ darkMode = false }: NewsletterFormProps) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const url = `http://127.0.0.1:5000/api/subscribe`

    if (!email || !email.includes("@")) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um endereço de email válido.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    const formData = new URLSearchParams();

    console.log('dd')
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email})
      })

      if (response.ok) {
        toast({
          title: "Inscrição realizada com sucesso!",
          description: "Você receberá atualizações sobre o lançamento do CortaSilêncio.",
        })
        setEmail("")
      } else {
        const data = await response.json()
        throw new Error(data.message || "Ocorreu um erro ao processar sua inscrição.")
      }
    } catch (error) {
      toast({
        title: "Erro ao processar inscrição",
        description: error instanceof Error ? error.message : "Ocorreu um erro ao processar sua inscrição.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={cn(
            "flex-1 border-zinc-300",
            darkMode && "bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400",
          )}
          required
        />
        <Button
          type="submit"
          className={cn("bg-rose-500 hover:bg-rose-600", darkMode && "text-white")}
          disabled={isLoading}
        >
          {isLoading ? "Enviando..." : "Entrar na Lista"}
        </Button>
      </div>
      <p className={cn("text-xs text-zinc-500", darkMode && "text-zinc-400")}>
        Ao se inscrever, você concorda em receber emails sobre o lançamento e atualizações do CortaSilêncio.
      </p>
    </form>
  )
}

