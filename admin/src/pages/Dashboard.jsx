import React from 'react'

import SidebarMenu from 'react-bootstrap-sidebar-menu';
const Dashboard = () => {
  return (
<SidebarMenu>
  <SidebarMenu.Header>
    <SidebarMenu.Brand>
      {/* Your brand icon */}
    </SidebarMenu.Brand>
    <SidebarMenu.Toggle />
  </SidebarMenu.Header>
  <SidebarMenu.Body>
    <SidebarMenu.Nav>
      <SidebarMenu.Nav.Link>
        <SidebarMenu.Nav.Icon>
          {/* Menu item icon */}
        </SidebarMenu.Nav.Icon>
        <SidebarMenu.Nav.Title>
          {/* Menu item title */}
        </SidebarMenu.Nav.Title>
      </SidebarMenu.Nav.Link>
    </SidebarMenu.Nav>
    <SidebarMenu.Sub>
      <SidebarMenu.Sub.Toggle>
        <SidebarMenu.Nav.Icon />
        <SidebarMenu.Nav.Title>
         sdfghjknhbgfdfgh
        </SidebarMenu.Nav.Title>
      </SidebarMenu.Sub.Toggle>
      <SidebarMenu.Sub.Collapse>
        <SidebarMenu.Nav>
          <SidebarMenu.Nav.Link>
            <SidebarMenu.Nav.Icon>
              gfvhbjnknhbgvcvb
            </SidebarMenu.Nav.Icon>
            <SidebarMenu.Nav.Title>
             hjgfvgbhnjmnjb vbn
            </SidebarMenu.Nav.Title>
          </SidebarMenu.Nav.Link>
        </SidebarMenu.Nav>
      </SidebarMenu.Sub.Collapse>
    </SidebarMenu.Sub>
  </SidebarMenu.Body>
</SidebarMenu>
  )
}

export default Dashboard