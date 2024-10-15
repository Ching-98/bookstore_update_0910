import '../globals.css';
import { Typography, Container } from '@mui/material';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="relative bg-gray-400 py-10 mt-auto">
            <Container maxWidth="lg">
                <Typography variant="body2" color="text.secondary" align="center">
                    © {new Date().getFullYear()} 網上書店. 版權所有.
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                    <Link href="/aboutus" color="inherit">
                        關於我們
                    </Link>
                    {' | '}
                    <Link href="/contactus" color="inherit">
                        聯繫我們
                    </Link>
                    {' | '}
                    <Link href="/privacy" color="inherit">
                        隱私政策
                    </Link>
                </Typography>
            </Container>
        </footer>
    );
}