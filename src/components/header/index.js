import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  Container,
  Group,
  Nav,
  TextLink,
  Logo,
  MaterialIcon,
  IconButton,
  Holder,
} from './styles/header';
import { links } from '../../fixtures/links';

export default function Header() {
  const { pathname } = useLocation();
  return (
    <>
      <Container>
        <Nav>
          <Logo>Bookstore CMS</Logo>
          <Group>
            {links.map(({ text, url }) => (
              <TextLink key={url} active={url === pathname}>
                <Link className="link" to={url}>
                  {text}
                </Link>
              </TextLink>
            ))}
          </Group>
          <Holder>
            <IconButton>
              <MaterialIcon src="https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg" />
            </IconButton>
          </Holder>
        </Nav>
      </Container>
      <Outlet />
    </>
  );
}
