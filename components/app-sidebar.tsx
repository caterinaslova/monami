import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar';
import { menuSideBarConfig, menuSideBarTurnos } from '@/lib/datos';
import { CalendarCheck } from "lucide-react";
import CerrarMenuSide from './admin/generales/CerrarMenuSide';
import Logo from './admin/generales/Logo';

export function AppSidebar() {


  return (
    <Sidebar className='mt-20'  collapsible='icon'>
      <div className=" md:hidden p-2 flex justify-between">
        <Logo/>
         <CerrarMenuSide/>
      </div>
      <SidebarContent className=''>
      <SidebarGroup>
          <SidebarGroupLabel></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu >
                <SidebarMenuItem className='mx-auto' >
                  <SidebarMenuButton asChild>
                    <a href={'/admin'} >
                      <CalendarCheck/>
                      <span>Hoy</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
           </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Reservas</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuSideBarTurnos.map((item) => (
                <SidebarMenuItem key={item.titulo}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icono />
                      <span>{item.titulo}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Configuraciones</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuSideBarConfig.map((item) => (
                <SidebarMenuItem key={item.titulo}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icono />
                      <span>{item.titulo}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
