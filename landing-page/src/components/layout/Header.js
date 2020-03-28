import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { FormattedMessage, Link } from "gatsby-plugin-intl"

import { Button, Logo } from "../commons"

const Header = () => (
    <header className="sticky top-0 bg-white shadow">
        <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
            <Link className="flex items-center text-2xl" to="/">
                <div className="w-12 mr-3">
                    <Logo />
                </div>
                <FormattedMessage id={"NAME_APP"} />
            </Link>
            <div className="flex mt-4 sm:mt-0">
                <AnchorLink className="px-4" href="#features">
                    <FormattedMessage id={"PRINCIPLES"} />
                </AnchorLink>
                <Link className="px-4" to="/blog">
                    <FormattedMessage id={"BLOG"} />
                </Link>
                <AnchorLink className="px-4" href="#collaborate">
                    <FormattedMessage id={"COLLABORATE"} />
                </AnchorLink>
                <AnchorLink className="px-4" href="#testimonials">
                    <FormattedMessage id={"TESTIMONIALS"} />
                </AnchorLink>
            </div>
            <div className="hidden md:block">
                <Button className="text-sm">
                    <FormattedMessage id={"USE_APP"} />
                </Button>
            </div>
        </div>
    </header>
)

export default Header
