import Link from 'next/link'
import { FaEdit } from 'react-icons/fa';

export default function EditLinkButton({children, href}) {
  return (
      <Link href={href} className="btn btn-accent btn-sm"><FaEdit/> { children }</Link>
  )
}
