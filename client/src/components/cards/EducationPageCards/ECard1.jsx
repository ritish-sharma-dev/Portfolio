import React from 'react'
import { NavLink } from 'react-router'
import TypingCode from '../../TypingCode'
import { Link2 } from 'lucide-react'

const ECard1 = () => {
  return (
    <div className="max-md:hidden p-4 md:p-8 space-y-4 md:py-12 flex-1  rounded-xl overflow-hidden font-sans">
            {/* Header: Endpoint Info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Link2 className="h-4 w-4 text-slate-400" aria-hidden="true" />
                <span className="text-[11px] md:text-xs font-mono text-slate-400 tracking-tight">
                  POST /api/v1/contact
                </span>
              </div>
              <span className="text-[9px] md:text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                JSON Response
              </span>
            </div>

            {/* Main Code Block - whitespace-pre-wrap prevents scrolling */}
            <div className="p-4 md:p-6 rounded-lg bg-[#010409]/80 border border-white/5 shadow-2xl overflow-hidden">
              <pre className="code-typing text-[min(2.7vw,13px)] md:text-[13px] leading-5 md:leading-6 font-mono text-slate-300 whitespace-pre-wrap break-words">
                <TypingCode>
                  {'{'}{'\n'}
                  {'  '}<span className="text-blue-300">"status"</span>: <span className="text-emerald-400">"success"</span>,{'\n'}
                  {'  '}<span className="text-blue-300">"data"</span>: {'{'}{'\n'}
                  {'    '}<span className="text-blue-300">"email"</span>: <span className="text-emerald-400">"ritishsharma04022006@gmail.com"</span>,{'\n'}
                  {'    '}<span className="text-blue-300">"github"</span>: <span className="text-emerald-400">"github.com/Ritish-Sharma-Dev"</span>,{'\n'}
                  {'    '}<span className="text-blue-300">"linkedin"</span>: <span className="text-emerald-400">"linkedin.com/in/ritish-sharma-dev"</span>,{'\n'}
                  {'    '}<span className="text-blue-300">"twitter"</span>: <span className="text-emerald-400">"x.com/Ritish__Sharma"</span>,{'\n'}
                  {'    '}<span className="text-blue-300">"instagram"</span>: <span className="text-emerald-400">"instagram.com/ritish.sharma._"</span>,{'\n'}
                  {'    '}<span className="text-blue-300">"responseTime"</span>: <span className="text-blue-400">"&lt; 24h"</span>{'\n'}
                  {'  '}{'}'}{'\n'}
                  {'}'}
                </TypingCode>
              </pre>
            </div>
          </div>
  )
}

export default ECard1