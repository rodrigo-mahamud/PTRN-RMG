// app/not-found.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
   return (
      <div className='flex flex-col items-center justify-center min-h-screen'>
         <h2 className='text-4xl font-bold mb-4'>404 - Página no encontrada</h2>
         <p className='text-xl mb-8'>Lo sentimos, la página que estás buscando no existe.</p>
         <Button variant={"default"} asChild>
            <Link href='/'>Volver al inicio</Link>
         </Button>
      </div>
   );
}
