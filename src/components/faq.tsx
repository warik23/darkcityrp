"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type FaqItem = {
    question: string
    answer: string
}

const faqItems: FaqItem[] = [
    {
        question: "Mi az a FiveM RP szerver?",
        answer:
            "A FiveM egy módosítás a Grand Theft Auto V játékhoz, amely lehetővé teszi egyedi szerverek létrehozását. Az RP (roleplay) szervereken a játékosok különböző karaktereket alakítanak és valós élethelyzeteket szimulálnak egy virtuális városban.",
    },
    {
        question: "Szükségem van a GTA V játékra a csatlakozáshoz?",
        answer:
            "Igen, a FiveM használatához szükséged van a Grand Theft Auto V legális példányára a Steam, Epic Games vagy Rockstar Games platformon.",
    },
    {
        question: "Hogyan kezdhetem el a roleplayt, ha még soha nem csináltam ilyet?",
        answer:
            "Csatlakozz a Discord szerverünkhöz, ahol találsz útmutatókat és segítséget kaphatsz a tapasztalt játékosoktól. Emellett a szerveren belül is vannak oktatók, akik segítenek az első lépésekben.",
    },
    {
        question: "Milyen karaktert hozhatok létre a szerveren?",
        answer:
            "Szinte bármilyen karaktert létrehozhatsz, ami beleillik a szerver világába. Lehetsz rendőr, orvos, szerelő, bűnöző vagy akár vállalkozó is. A lényeg, hogy tartsd be a szerver szabályzatát és játssz valósághűen.",
    },
    {
        question: "Vannak-e egyedi járművek és épületek a szerveren?",
        answer:
            "Igen, a Dark City Roleplay számos egyedi járművel, épülettel és funkcióval rendelkezik, amelyek egyedivé teszik a játékélményt.",
    },
]

export function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="gyik" className="mx-auto max-w-[1400px] px-4 py-8 md:py-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">GYIK</h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-12">Gyakran ismételt kérdések</p>

            <div className="space-y-4">
                {faqItems.map((item, index) => (
                    <Card key={index} className="bg-black/60 border-red-900/30">
                        <CardHeader className="p-0">
                            <Button
                                variant="ghost"
                                className="w-full justify-between p-4 md:p-6 text-left"
                                onClick={() => toggleFaq(index)}
                            >
                                <CardTitle className="text-lg md:text-xl font-medium">{item.question}</CardTitle>
                                <ChevronDown className={`h-5 w-5 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
                            </Button>
                        </CardHeader>
                        {openIndex === index && (
                            <CardContent className="pt-0 pb-4 md:pb-6 px-4 md:px-6">
                                <p className="text-gray-300 text-sm md:text-base">{item.answer}</p>
                            </CardContent>
                        )}
                    </Card>
                ))}
            </div>
        </section>
    )
}

