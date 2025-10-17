import React from 'react'

function Footer() {
    const owner  = ["Mrr. Phors"];
  return (
     <footer className="bg-[#0a192f] text-center py-4 border-t border-gray-700">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Create by{" "}
          <span className="text-teal-400 font-medium">Mrr. Phors</span>. All rights reserved.
        </p>
      </footer>
  )
}

export default Footer