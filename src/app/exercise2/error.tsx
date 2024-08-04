"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/container";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function ErrorBoundary({ error }: { error: Error }) {
   return (
      <Container className='flex justify-center'>
         <Card className='max-w-3xl'>
            <CardHeader>
               <CardTitle>{error.name}</CardTitle>
               <CardDescription>Ha ocurrido el siguiente error:</CardDescription>
            </CardHeader>
            <CardContent>
               <Alert variant='destructive' className='flex flex-col items-start p-6'>
                  <AlertTitle className='mb-3 text-black dark:text-white break-all leading-5'>{error.message}</AlertTitle>
                  <AlertDescription className='dark:text-white/75 text-black/75 font-light break-all'>{error.stack}</AlertDescription>
               </Alert>
            </CardContent>
         </Card>
      </Container>
   );
}
