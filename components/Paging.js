import Link from 'next/link';


const Paging = () => (
    <div className="rs-paging">
        <ul className="rs-pag__ul">
            <li>
                <Link href="/">
                    <a >Previous</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                <a >1</a>
            </Link></li>
            <li><Link href="/">
                <a >2</a>
            </Link></li>
            <li><Link href="/about">
                <a>Next</a>
            </Link></li>
        </ul>
        <style jsx>
            {`
            .rs-pag__ul li{
                float: left;
                padding: .10rem;
                border: solid 1px #ddd;
                margin-right: .10rem;
            }
            .rs-pag__ul li:first-child,
            .rs-pag__ul li:last-child{
                border:none;
            }
        `}
        </style>
    </div>
)

export default Paging;
