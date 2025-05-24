import { ConfirmAccountForm } from "@/components/autenticacion/ConfirmAccountForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';


const ConfirmAccountPage = () => {
  return (

      <main className='flex flex-col justify-center items-center min-h-screen bg-radial from-[#00BDA7] to-[#004B49]'>
        <Card className='w-[350px] h-[400px] flex flex-col justify-center items-center mt-10'>
            <CardHeader className=" w-full text-center p-2 mb-10">
                 <CardTitle className="text-xl">Monami Padel&Squash</CardTitle>
                <CardTitle className="">Confirmación de su cuenta</CardTitle>
             </CardHeader>
            <CardContent >
                <ConfirmAccountForm/>
            </CardContent>

        </Card>
      </main>
   

   
 
  );
};

export default ConfirmAccountPage;
