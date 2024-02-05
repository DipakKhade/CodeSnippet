import { ReactNode } from "react"
import { cn } from "../../utils/cn"
import { Link } from "react-router-dom"

const MenuCard = ({className,children,Linkto}:{className?:string,children:ReactNode,Linkto:string}) => {
  return (
    <Link to={Linkto}>
    <div className={cn('w-80 rounded-lg border bg-white dark:bg-slate-700 dark:text-slate-900 hover:bg-slate-100 h-40 flex items-center justify-center cursor-pointer flex-col',className)}>
      {children}
    </div>
    </Link>
  )
}

export default MenuCard
