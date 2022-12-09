import { Outlet, Link, useLocation } from 'react-router-dom';
import { Container, Group, Nav, TextLink, Logo } from './styles/header';
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
        </Nav>
      </Container>
      <Outlet />
    </>
  );
}
