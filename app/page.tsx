"use client"

import { useState, useEffect } from "react"

export default function ResumePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white overflow-x-hidden">
      <div className="max-w-[1100px] mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between bg-gradient-to-br from-black to-[#2d004d] rounded-2xl p-4 sm:p-5 shadow-[0_0_30px_rgba(128,0,255,0.7)] animate-[fadeInDown_1s_ease] relative overflow-hidden mb-6 sm:mb-10">
          {/* Animated background */}
          <div className="absolute inset-0 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(143,0,255,0.2),transparent_70%)] animate-[flow_10s_linear_infinite]"></div>

          <img
            src="/profile.jpeg"
            alt="Profile Photo"
            className="rounded-full w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] border-3 border-[#8f00ff] animate-[bounceIn_1.5s_ease] z-10 mb-4 sm:mb-0"
          />

          <div className="flex-1 sm:ml-5 z-10 text-center sm:text-left">
            <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-[#b366ff] [text-shadow:0_0_12px_#8f00ff] mb-2">
              NIKHIL N KOTIAN
            </h1>
            <p className="text-xs sm:text-sm text-[#ddd] my-1">WEB | E-HACK | D-MARK | STUDENT</p>
            <p className="text-xs sm:text-sm text-[#ddd] my-1 leading-relaxed">
              "Dynamic and adaptive professional with strong technical expertise, impactful communication, and a
              growth-driven mindset to learn and excel."
            </p>
          </div>

          <div className="text-center sm:text-right text-xs sm:text-sm text-[#bbb] z-10 mt-4 sm:mt-0">
            <p className="mb-1">📍 Mangalore, Karnataka</p>
            <p className="mb-1">📞 +91 9353472169</p>
            <p className="mb-3">📧 nikhilkotian6699@gmail.com</p>
            <div className="flex gap-3 justify-center sm:justify-end">
              <a
                href="https://wa.me/919353472169"
                target="_blank"
                className="text-[#b366ff] text-lg sm:text-xl transition-all duration-300 hover:text-white hover:scale-125 hover:[text-shadow:0_0_15px_#8f00ff,0_0_25px_#b366ff]"
                rel="noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="mailto:nikhilkotian6699@gmail.com"
                target="_blank"
                className="text-[#b366ff] text-lg sm:text-xl transition-all duration-300 hover:text-white hover:scale-125 hover:[text-shadow:0_0_15px_#8f00ff,0_0_25px_#b366ff]"
                rel="noreferrer"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="https://github.com/nikhilkotian6699"
                target="_blank"
                className="text-[#b366ff] text-lg sm:text-xl transition-all duration-300 hover:text-white hover:scale-125 hover:[text-shadow:0_0_15px_#8f00ff,0_0_25px_#b366ff]"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/nikhil-kotian-3333882b6/"
                target="_blank"
                className="text-[#b366ff] text-lg sm:text-xl transition-all duration-300 hover:text-white hover:scale-125 hover:[text-shadow:0_0_15px_#8f00ff,0_0_25px_#b366ff]"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://youtu.be/lhDor1eyPhc?si=l_cc1NWiWDeAzqeD"
                target="_blank"
                className="text-[#b366ff] text-lg sm:text-xl transition-all duration-300 hover:text-white hover:scale-125 hover:[text-shadow:0_0_15px_#8f00ff,0_0_25px_#b366ff]"
                rel="noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="my-6 sm:my-10 animate-[fadeInUp_1s_ease]">
          <h2 className="text-[#b366ff] border-l-[5px] border-[#8f00ff] pl-3 text-xl sm:text-2xl mb-4 sm:mb-5 [text-shadow:0_0_8px_#8f00ff] text-center">
            EDUCATION
          </h2>
          <div className="text-center px-4">
            <p className="mb-2 text-sm sm:text-base">
              <strong>2024-2026</strong> - Mangalore Institute of Technology & Engineering (MITE), Karnataka
            </p>
            <p className="text-sm sm:text-base">
              MCA – Master of Computer Applications in Cyber Security (Cryptography)
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="my-6 sm:my-10 animate-[fadeInUp_1s_ease]">
          <h2 className="text-[#b366ff] border-l-[5px] border-[#8f00ff] pl-3 text-xl sm:text-2xl mb-4 sm:mb-5 [text-shadow:0_0_8px_#8f00ff] text-center">
            SKILLS & EXPERTISE
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
            {[
              { name: "JAVA", percent: 85, desc: "OOP, Spring Boot, Power Bill" },
              { name: "PYTHON", percent: 80, desc: "Data Analysis, Scraping, Visualization" },
              { name: "PROMPTING", percent: 75, desc: "Code Debug, Info Finding, Root Access" },
              { name: "E-HACKING", percent: 70, desc: "SQL Injection, WiFi Jacking, Terminal" },
              { name: "JAVASCRIPT", percent: 85, desc: "Next.js, React, Vue" },
              { name: "BUSINESS", percent: 92, desc: "Consultant, Real Estate" },
              { name: "AI MEDIA", percent: 70, desc: "Real Estate, D-Marketing" },
              { name: "TEAM HANDLING", percent: 90, desc: "Leadership, Negotiation" },
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] p-3 sm:p-4 lg:p-6 rounded-2xl sm:rounded-3xl text-center transition-all duration-400 shadow-[0_0_20px_rgba(143,0,255,0.3)] hover:translate-y-[-5px] sm:hover:translate-y-[-10px] hover:scale-[1.05] sm:hover:scale-[1.08] hover:shadow-[0_0_35px_rgba(143,0,255,0.9)] relative overflow-hidden"
              >
                <div
                  className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[110px] lg:h-[110px] rounded-full mx-auto mb-3 sm:mb-4 relative flex items-center justify-center"
                  style={{
                    background: `conic-gradient(#8f00ff ${skill.percent}%, #222 ${skill.percent}%)`,
                  }}
                >
                  <span className="absolute text-white font-bold text-xs sm:text-sm">{skill.percent}%</span>
                </div>
                <h3 className="text-[#b366ff] text-xs sm:text-sm lg:text-base font-semibold mb-1 sm:mb-2">
                  {skill.name}
                </h3>
                <p className="text-[#ccc] text-xs sm:text-sm leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="my-6 sm:my-10 animate-[fadeInUp_1s_ease]">
          <h2 className="text-[#b366ff] border-l-[5px] border-[#8f00ff] pl-3 text-xl sm:text-2xl mb-4 sm:mb-5 [text-shadow:0_0_8px_#8f00ff] text-center">
            PROJECT EXPERIENCE
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-[#1a1a1a] p-4 sm:p-5 rounded-2xl sm:rounded-3xl text-[#ddd] min-h-[200px] sm:min-h-[220px] text-center shadow-[5px_5px_15px_#000,-5px_-5px_15px_#333] transition-all duration-300 cursor-pointer relative overflow-hidden animate-[fadeInUp_0.8s_ease] border-2 border-[#8f00ff] hover:scale-[1.02] sm:hover:scale-[1.03] hover:shadow-[inset_2px_2px_6px_#000,inset_-2px_-2px_6px_#333,0_0_30px_rgba(143,0,255,0.7)]">
              <h3 className="text-[#b366ff] mb-3 text-base sm:text-lg font-semibold leading-tight">
                REAL ESTATE LISTING PLATFORM With AI - On working
              </h3>
              <p className="text-xs sm:text-sm text-[#bbb] mb-4 leading-relaxed">
                "Developing an important project in the real estate sector, integrating AI to revolutionize the
                industry."
              </p>
              <a
                href="https://github.com/nikhilkotian6699/Real-estate-listing-platform"
                target="_blank"
                className="inline-block mt-4 px-4 sm:px-5 py-2 sm:py-3 bg-gradient-to-br from-[#8f00ff] to-[#b366ff] text-white rounded-xl text-xs sm:text-sm font-bold no-underline transition-all duration-400 shadow-[0_0_12px_rgba(143,0,255,0.6)] hover:bg-gradient-to-br hover:from-[#b366ff] hover:to-[#8f00ff] hover:scale-105 hover:shadow-[0_0_20px_#8f00ff] hover:[text-shadow:0_0_5px_#fff]"
                rel="noreferrer"
              >
                🚀 View Repo
              </a>
            </div>

            <div className="bg-[#1a1a1a] p-4 sm:p-5 rounded-2xl sm:rounded-3xl text-[#ddd] min-h-[200px] sm:min-h-[220px] text-center shadow-[5px_5px_15px_#000,-5px_-5px_15px_#333] transition-all duration-300 cursor-pointer relative overflow-hidden animate-[fadeInUp_0.8s_ease] border-2 border-[#8f00ff] hover:scale-[1.02] sm:hover:scale-[1.03] hover:shadow-[inset_2px_2px_6px_#000,inset_-2px_-2px_6px_#333,0_0_30px_rgba(143,0,255,0.7)]">
              <h3 className="text-[#b366ff] mb-3 text-base sm:text-lg font-semibold leading-tight">MITE-EAT</h3>
              <p className="text-xs sm:text-sm text-[#bbb] mb-4 leading-relaxed">
                "An open-source, full-stack web platform built to streamline and digitize canteen operations from
                real-time inventory tracking and order handling to a responsive, role-based staff dashboard"
              </p>
              <a
                href="https://github.com/nikhilkotian6699/Mite-Eat"
                target="_blank"
                className="inline-block mt-4 px-4 sm:px-5 py-2 sm:py-3 bg-gradient-to-br from-[#8f00ff] to-[#b366ff] text-white rounded-xl text-xs sm:text-sm font-bold no-underline transition-all duration-400 shadow-[0_0_12px_rgba(143,0,255,0.6)] hover:bg-gradient-to-br hover:from-[#b366ff] hover:to-[#8f00ff] hover:scale-105 hover:shadow-[0_0_20px_#8f00ff] hover:[text-shadow:0_0_5px_#fff]"
                rel="noreferrer"
              >
                🚀 View Repo
              </a>
            </div>

            <div className="bg-[#1a1a1a] p-4 sm:p-5 rounded-2xl sm:rounded-3xl text-[#ddd] min-h-[200px] sm:min-h-[220px] text-center shadow-[5px_5px_15px_#000,-5px_-5px_15px_#333] transition-all duration-300 cursor-pointer relative overflow-hidden animate-[fadeInUp_0.8s_ease] border-2 border-[#8f00ff] hover:scale-[1.02] sm:hover:scale-[1.03] hover:shadow-[inset_2px_2px_6px_#000,inset_-2px_-2px_6px_#333,0_0_30px_rgba(143,0,255,0.7)]">
              <h3 className="text-[#b366ff] mb-3 text-base sm:text-lg font-semibold leading-tight">
                Web,Network & Crypto Tools for Dev
              </h3>
              <p className="text-xs sm:text-sm text-[#bbb] mb-4 leading-relaxed">
                An open-source developer-friendly toolkit that brings together steganography, network security, and
                cryptography tools in one place.
              </p>
              <a
                href="https://github.com/nikhilkotian6699/steganography-tools-adv"
                target="_blank"
                className="inline-block mt-4 px-4 sm:px-5 py-2 sm:py-3 bg-gradient-to-br from-[#8f00ff] to-[#b366ff] text-white rounded-xl text-xs sm:text-sm font-bold no-underline transition-all duration-400 shadow-[0_0_12px_rgba(143,0,255,0.6)] hover:bg-gradient-to-br hover:from-[#b366ff] hover:to-[#8f00ff] hover:scale-105 hover:shadow-[0_0_20px_#8f00ff] hover:[text-shadow:0_0_5px_#fff]"
                rel="noreferrer"
              >
                🚀 View Repo
              </a>
            </div>

            <div className="bg-[#1a1a1a] p-4 sm:p-5 rounded-2xl sm:rounded-3xl text-[#ddd] min-h-[200px] sm:min-h-[220px] text-center shadow-[5px_5px_15px_#000,-5px_-5px_15px_#333] transition-all duration-300 cursor-pointer relative overflow-hidden animate-[fadeInUp_0.8s_ease] border-2 border-[#8f00ff] hover:scale-[1.02] sm:hover:scale-[1.03] hover:shadow-[inset_2px_2px_6px_#000,inset_-2px_-2px_6px_#333,0_0_30px_rgba(143,0,255,0.7)]">
              <h3 className="text-[#b366ff] mb-3 text-base sm:text-lg font-semibold leading-tight">
                clooyzi web Development project
              </h3>
              <p className="text-xs sm:text-sm text-[#bbb] mb-4 leading-relaxed">
                created website for helping Startup to grow and build Business Revenue
              </p>
              <a
                href="https://github.com/nikhilkotian6699/clooyzi-new-2.0"
                target="_blank"
                className="inline-block mt-4 px-4 sm:px-5 py-2 sm:py-3 bg-gradient-to-br from-[#8f00ff] to-[#b366ff] text-white rounded-xl text-xs sm:text-sm font-bold no-underline transition-all duration-400 shadow-[0_0_12px_rgba(143,0,255,0.6)] hover:bg-gradient-to-br hover:from-[#b366ff] hover:to-[#8f00ff] hover:scale-105 hover:shadow-[0_0_20px_#8f00ff] hover:[text-shadow:0_0_5px_#fff]"
                rel="noreferrer"
              >
                🚀 View Repo
              </a>
            </div>

            <div className="bg-[#1a1a1a] p-4 sm:p-5 rounded-2xl sm:rounded-3xl text-[#ddd] min-h-[200px] sm:min-h-[220px] text-center shadow-[5px_5px_15px_#000,-5px_-5px_15px_#333] transition-all duration-300 cursor-pointer relative overflow-hidden animate-[fadeInUp_0.8s_ease] border-2 border-[#8f00ff] hover:scale-[1.02] sm:hover:scale-[1.03] hover:shadow-[inset_2px_2px_6px_#000,inset_-2px_-2px_6px_#333,0_0_30px_rgba(143,0,255,0.7)]">
              <h3 className="text-[#b366ff] mb-3 text-base sm:text-lg font-semibold leading-tight">
                Adv Image steganography
              </h3>
              <p className="text-xs sm:text-sm text-[#bbb] mb-4 leading-relaxed">
                “This project encodes secret messages in images using steganography, keeping them hidden and secure from
                detection.”
              </p>
              <a
                href="https://github.com/nikhilkotian6699/steganography-tools"
                target="_blank"
                className="inline-block mt-4 px-4 sm:px-5 py-2 sm:py-3 bg-gradient-to-br from-[#8f00ff] to-[#b366ff] text-white rounded-xl text-xs sm:text-sm font-bold no-underline transition-all duration-400 shadow-[0_0_12px_rgba(143,0,255,0.6)] hover:bg-gradient-to-br hover:from-[#b366ff] hover:to-[#8f00ff] hover:scale-105 hover:shadow-[0_0_20px_#8f00ff] hover:[text-shadow:0_0_5px_#fff]"
                rel="noreferrer"
              >
                🚀 View Repo
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-5 text-center bg-[#111] rounded-2xl shadow-[0_0_20px_rgba(143,0,255,0.3)] animate-[fadeInUp_1s_ease]">
          <div className="flex justify-center gap-4 sm:gap-6">
            <a
              href="https://github.com/nikhilkotian6699"
              target="_blank"
              className="text-[#b366ff] text-xl sm:text-2xl transition-all duration-300 hover:text-white hover:scale-125 hover:[text-shadow:0_0_15px_#8f00ff,0_0_25px_#b366ff]"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/nikhil-kotian-3333882b6/"
              target="_blank"
              className="text-[#b366ff] text-xl sm:text-2xl transition-all duration-300 hover:text-white hover:scale-125 hover:[text-shadow:0_0_15px_#8f00ff,0_0_25px_#b366ff]"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://wa.me/919353472169"
              target="_blank"
              className="text-[#b366ff] text-xl sm:text-2xl transition-all duration-300 hover:text-white hover:scale-125 hover:[text-shadow:0_0_15px_#8f00ff,0_0_25px_#b366ff]"
              rel="noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="https://youtu.be/lhDor1eyPhc?si=l_cc1NWiWDeAzqeD"
              target="_blank"
              className="text-[#b366ff] text-xl sm:text-2xl transition-all duration-300 hover:text-white hover:scale-125 hover:[text-shadow:0_0_15px_#8f00ff,0_0_25px_#b366ff]"
              rel="noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
