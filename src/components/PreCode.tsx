import { ReactNode } from 'react'
import { cn } from '../utils/cn'

const PreCode = ({className,children}:{className?:string ,children:ReactNode}) => {
  return (
    <div className={cn('w-full bg-zinc-800 p-2 rounded-b-sm text-white overflow-auto',className)}>
        <pre>
            <code> {children}</code>
        </pre>
     
    </div>
  )
}

export default PreCode
