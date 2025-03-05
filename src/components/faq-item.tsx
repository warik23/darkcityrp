"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FaqItemProps {
    question: string
    answer: string
}

export function FaqItem({ question, answer }: FaqItemProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="bg-black/60 border border-red-900/30 rounded-lg overflow-hidden">
            <button
                className="w-full flex items-center justify-between p-4 md:p-6 text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg md:text-xl font-medium">{question}</h3>
                <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && (

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="pt-0 pb-4 md:pb-6 px-4 md:px-6">
                        <p className="text-gray-300 text-sm md:text-base">{answer}</p>
                    </div>


                </motion.div>




            )}
        </div>
    )
}

