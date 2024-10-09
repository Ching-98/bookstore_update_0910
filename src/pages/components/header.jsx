import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import Asidebar from "./asidebar";

export default function Header({ onClick, isOpen }) {
  const router = useRouter();

  return (
    <>
      <AppBar
        className="fixed z-50 top-0 border-orange-500 border-solid border-t-4 max-w-full truncate hover:bg-sky-500"
        style={{ minHeight: "10vh" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" className="flex items-center w-10">
              <img
                src="/images/icon_img/bookstoreLogov2.png"
                alt="bookstore-icon"
                className="w-8 mx-4 brightness-0 invert"
              />
              <p className="text-2xl inline-block">品誠</p>
            </Link>
          </Typography>
          <Button
            className="hover:underline hover:decoration-wavy text-base hover:decoration-yellow-500 hover:scale-110 "
            color="inherit"
            onClick={() => router.push("../books/")}
          >
            書藉
          </Button>
          <Button
            className="hover:underline hover:decoration-wavy text-base hover:decoration-yellow-500 hover:scale-110 "
            color="inherit"
            onClick={() => router.push("../account/login")}
          >
            登錄
          </Button>
          <Button
            className="hover:underline hover:decoration-wavy text-base hover:decoration-yellow-500 hover:scale-110 "
            color="inherit"
            onClick={() => router.push("../account/register")}
          >
            註冊
          </Button>
          <Button
            className="hover:underline hover:decoration-wavy text-base hover:decoration-yellow-500 hover:scale-110 "
            color="inherit"
            onClick={() => router.push("../checkout/cart")}
          >
            購物車
          </Button>
          <Button
            className="hover:underline hover:decoration-wavy text-base hover:decoration-yellow-500 hover:scale-110 "
            color="inherit"
            onClick={() => router.push("../checkout/orders")}
          >
            訂單
          </Button>
          <Asidebar onClick={onClick} isOpen={isOpen} />
        </Toolbar>
      </AppBar>
    </>
  );
}
