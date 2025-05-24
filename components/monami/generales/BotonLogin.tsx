'use client';

import LoginComponentModal from '@/components/auth/LoginComponentModal';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Link from 'next/link';

export default function BotonLogin() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='link'
          className='bg-primary tracking-widest text-base font-normal text-primary-foreground cursor-pointer'
        >
          Ingresar
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Entrar a Monami Padel&Squash</DialogTitle>
          <DialogDescription>
            Para hacer una reserva de turno debe estar registrado.
          </DialogDescription>
        </DialogHeader>
        <LoginComponentModal />
        {/* <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Email
            </Label>
            <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Contraseña
            </Label>
            <Input id="username" defaultValue="@peduarte" className="col-span-3" />
          </div>
        </div> */}
        <DialogFooter className='flex justify-center! items-center!'>
          <div className=" flex flex-col justify-center items-center">
                      <div className='text-muted-foreground text-xs'>
            Primera vez.{' '}
            <Link href={'/register'} className='underline cursor-pointer'>
              {' '}
              Registrarme
            </Link>
          </div>
          <div className='text-muted-foreground text-xs'>
            Olvidé mi contraseña.{' '}
            <Link
              href={'/autenticacion/olvide-password'}
              className='underline cursor-pointer'
            >
              {' '}
              Recuperarla
            </Link>
          </div>

          </div>

        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
