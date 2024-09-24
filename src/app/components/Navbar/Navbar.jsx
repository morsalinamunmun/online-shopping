"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaSearch, FaShoppingCart, FaRegHeart } from "react-icons/fa"; // React Icons
import { Input, Button, Drawer } from "antd"; // Ant Design components

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              E-Shop
            </Link>
          </div>

          {/* Search bar - hidden on mobile */}
          <div className="hidden sm:block flex-1 max-w-md mx-4">
            <Input
              prefix={<FaSearch />}
              placeholder="Search products..."
              className="w-full"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/cart" className="text-gray-600 hover:text-primary">
              <FaShoppingCart size={24} />
            </Link>
            <Link href="/wishlist" className="text-gray-600 hover:text-primary">
              <FaRegHeart size={24} />
            </Link>
            <Link href='/login'><Button type="primary">Login</Button></Link>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden">
            <Button
              icon={<FaBars />}
              onClick={() => setIsMenuOpen(true)}
              type="primary"
            />
            <Drawer
              title="Menu"
              placement="right"
              onClose={() => setIsMenuOpen(false)}
              open={isMenuOpen}
            >
              <div className="flex flex-col space-y-4 mt-4">
                <Input
                  prefix={<FaSearch />}
                  placeholder="Search products..."
                />
                <Link
                  href="/cart"
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaShoppingCart size={24} />
                  <span>Cart</span>
                </Link>
                <Link
                  href="/wishlist"
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaRegHeart size={24} />
                  <span>Wishlist</span>
                </Link>
                <Button type="primary" block onClick={() => setIsMenuOpen(false)}>
                  Login
                </Button>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
}
