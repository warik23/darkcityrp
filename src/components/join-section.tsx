import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Download, Gamepad2, Users } from "lucide-react"

export function JoinSection() {
  return (
    <section id="csatlakozas" className="mx-auto max-w-[1400px] px-4 py-8 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">Csatlakozás</h2>
      <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-12">
        Kövesd az alábbi lépéseket a szerverünkhöz való csatlakozáshoz
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <Card className="bg-black/60 border-red-900/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5 md:h-6 md:w-6 text-red-500" />
              1. Lépés
            </CardTitle>
            <CardDescription>FiveM telepítése</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Töltsd le és telepítsd a FiveM alkalmazást a hivatalos weboldalról.</p>
            <Button variant="outline" className="w-full">
              FiveM letöltése
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-black/60 border-red-900/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 md:h-6 md:w-6 text-red-500" />
              2. Lépés
            </CardTitle>
            <CardDescription>Csatlakozz a Discord szerverünkhöz</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Csatlakozz a közösségünkhöz, ahol segítséget kaphatsz és értesülhetsz a frissítésekről.
            </p>
            <Button variant="outline" className="w-full">
              Discord csatlakozás
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-black/60 border-red-900/30 sm:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gamepad2 className="h-5 w-5 md:h-6 md:w-6 text-red-500" />
              3. Lépés
            </CardTitle>
            <CardDescription>Csatlakozás a szerverhez</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Nyisd meg a FiveM-et, és keresd meg a Dark City Roleplay szervert, vagy használd a közvetlen csatlakozási
              linket.
            </p>
            <Button className="w-full bg-red-900 hover:bg-red-800">Csatlakozás a szerverhez</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

