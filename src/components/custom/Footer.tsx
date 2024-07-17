import { Github, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-muted py-8 md:py-12">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              <div className="grid gap-4">
                <h3 className="text-lg font-semibold">Company</h3>
                <Link
                  to="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  
                >
                  About
                </Link>
                <Link
                  to="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  
                >
                  Team
                </Link>
                <Link
                  to="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  
                >
                  Careers
                </Link>
                <Link
                  to="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  
                >
                  Blog
                </Link>
              </div>
              <div className="grid gap-4">
                <h3 className="text-lg font-semibold">Product</h3>
                <Link
                  to="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  
                >
                  Explore
                </Link>
                <Link
                  to="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  
                >
                  Trips
                </Link>
                <Link
                  to="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  
                >
                  Booking
                </Link>
                <Link
                  to="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  
                >
                  Pricing
                </Link>
              </div>
              <div className="grid gap-4">
                <h3 className="text-lg font-semibold">Resources</h3>
                <Link
                  to="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  
                >
                  Documentation
                </Link>
                <Link
                  to="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  
                >
                  Support
                </Link>
                <Link
                  to="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  
                >
                  FAQs
                </Link>
                <Link
                  to="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  
                >
                  Community
                </Link>
              </div>
              <div className="grid gap-4">
                <h3 className="text-lg font-semibold">Legal</h3>
                <Link
                  to="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  
                >
                  Terms of Service
                </Link>
                <Link
                  to="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  
                >
                  Privacy Policy
                </Link>
                <Link
                  to="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  
                >
                  Cookie Policy
                </Link>
                <Link
                  to="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  
                >
                  Accessibility
                </Link>
              </div>
              <div className="grid gap-4">
                <h3 className="text-lg font-semibold">Connect</h3>
                <Link
                  to="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  
                >
                  <TwitterIcon className="mr-2 inline-block h-4 w-4" />
                  Twitter
                </Link>
                <Link
                  to="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  
                >
                  <LinkedinIcon className="mr-2 inline-block h-4 w-4" />
                  LinkedIn
                </Link>
                <Link
                  to="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  
                >
                  <InstagramIcon className="mr-2 inline-block h-4 w-4" />
                  Instagram
                </Link>
                <Link
                  to="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Github className="mr-2 inline-block h-4 w-4" />
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </footer>
      )
}

export default Footer