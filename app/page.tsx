"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AudioWaveformIcon as WaveformIcon, ScissorsIcon, ArrowRight } from "lucide-react"
import NewsletterForm from "@/components/newsletter-form"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-mono">
      <header className="container mx-auto px-4 pt-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-lg">
            <div className="flex gap-2 items-center text-xl font-bold">
              <WaveformIcon className="h-6 w-6 text-rose-500" />
              <span className="bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent">
                CortaSilêncio
              </span>
            </div>
            <Button
              variant="ghost"
              className="text-sm font-medium"
              onClick={() => document.getElementById("wishlist")?.scrollIntoView({ behavior: "smooth" })}
            >
              Entrar na Lista
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-16">
              <div className="w-full md:w-1/2">
                <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
                  <span className="block">Silêncio?</span>
                  <span className="mt-2 block text-rose-500">Corta.</span>
                </h1>

                <div className="mt-8 space-y-6 text-lg text-zinc-700">
                  <p className="font-medium">
                    <span className="text-rose-500 font-bold">O problema:</span> Editores de vídeo perdem horas cortando
                    silêncios manualmente.
                  </p>
                  <p className="font-medium">
                    <span className="text-amber-500 font-bold">A solução:</span> CortaSilêncio detecta e remove
                    automaticamente períodos de silêncio dos seus vídeos.
                  </p>
                </div>

                <div className="mt-10">
                  <Button
                    className="group bg-rose-500 hover:bg-rose-600 text-lg px-6 py-6 h-auto rounded-xl"
                    onClick={() => document.getElementById("wishlist")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Quero economizar tempo
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-rose-200 opacity-50 blur-xl"></div>
                  <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-amber-200 opacity-50 blur-xl"></div>

                  {/* Audio visualization */}
                  <div className="relative rounded-2xl border-2 border-zinc-200 bg-white p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-rose-500"></div>
                        <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-xs font-medium text-zinc-500">CortaSilêncio</div>
                    </div>

                    <div className="space-y-8">
                      {/* Before */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-bold text-zinc-700">Antes</div>
                          <div className="text-xs text-zinc-500">00:03:42</div>
                        </div>
                        <div className="h-16 rounded-lg bg-zinc-100 p-2">
                          <div className="flex h-full w-full items-center justify-between">
                            {Array.from({ length: 60 }).map((_, i) => (
                              <div
                                key={`before-${i}`}
                                className="h-full w-1"
                                style={{
                                  height: `${i % 10 === 0 ? 10 : Math.max(5, Math.random() * 100)}%`,
                                  backgroundColor: i % 10 === 0 ? "#f43f5e" : "#d1d5db",
                                  opacity: i % 10 === 0 ? 0.3 : 1,
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Scissors animation */}
                      <div className="flex justify-center">
                        <div className="relative">
                          <ScissorsIcon className="h-8 w-8 text-rose-500 animate-bounce" />
                          <div className="absolute -left-12 -right-12 top-4 border-t-2 border-dashed border-rose-300"></div>
                        </div>
                      </div>

                      {/* After */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-bold text-zinc-700">Depois</div>
                          <div className="text-xs text-zinc-500">00:02:18</div>
                        </div>
                        <div className="h-16 rounded-lg bg-zinc-100 p-2">
                          <div className="flex h-full w-full items-center justify-between">
                            {Array.from({ length: 40 }).map((_, i) => (
                              <div
                                key={`after-${i}`}
                                className="h-full w-1"
                                style={{
                                  height: `${Math.max(30, Math.random() * 100)}%`,
                                  backgroundColor: "#d1d5db",
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between rounded-lg bg-green-50 p-3 text-sm text-green-700">
                        <span className="font-medium">Tempo economizado:</span>
                        <span className="font-bold">38%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-amber-50 opacity-70"></div>

          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="rounded-2xl bg-white p-6 shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-rose-500"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Economize Tempo</h3>
                  <p className="mt-2 text-zinc-600">
                    Reduza o tempo de edição em até 70% com detecção automática de silêncio.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-amber-500"
                    >
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Simples de Usar</h3>
                  <p className="mt-2 text-zinc-600">
                    Apenas faça upload do seu vídeo e defina o nível de silêncio. Nós cuidamos do resto.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-500"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Resultados Profissionais</h3>
                  <p className="mt-2 text-zinc-600">Cortes precisos que mantêm a fluidez natural do seu conteúdo.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="wishlist" className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-2xl rounded-3xl bg-zinc-900 p-8 md:p-12 text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Seja o primeiro a usar</h2>
              <p className="mt-4 text-zinc-300">
                O CortaSilêncio está em desenvolvimento. Entre na lista de espera para ter acesso antecipado.
              </p>
            </div>

            <div className="mt-8">
              <NewsletterForm darkMode={true} />
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-rose-400"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Sem instalação</span>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-rose-400"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Funciona com qualquer vídeo</span>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-rose-400"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Acesso antecipado gratuito</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex items-center gap-2 text-sm">
                <WaveformIcon className="h-4 w-4 text-rose-500" />
                <span className="font-medium">CortaSilêncio</span>
              </div>

              <p className="text-center text-sm text-zinc-500 md:text-left">
                &copy; {new Date().getFullYear()} CortaSilêncio. Todos os direitos reservados.
              </p>

              <div className="flex gap-6">
                <Link href="#" className="text-zinc-400 hover:text-zinc-900">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>

                <Link href="#" className="text-zinc-400 hover:text-zinc-900">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

