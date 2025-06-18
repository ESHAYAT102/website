"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function OverviewSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [-15, 15, -15],
      x: [-5, 5, -5],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      id="overview"
      className="mb-16 md:mb-24 lg:mb-32 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={floatVariants}
          animate="animate"
          className="absolute top-10 md:top-20 right-4 md:right-16 w-16 md:w-24 h-16 md:h-24 bg-gradient-to-br from-blue-400/20 md:from-blue-400/30 to-purple-400/20 md:to-purple-400/30 rounded-full blur-xl md:blur-4xl"
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          style={{ animationDelay: "3s" }}
          className="absolute bottom-8 md:bottom-16 left-4 md:left-16 w-24 md:w-40 h-24 md:h-40 bg-gradient-to-br from-green-400/15 md:from-green-400/20 to-cyan-400/15 md:to-cyan-400/20 rounded-full blur-xl md:blur-2xl"
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          style={{ animationDelay: "6s" }}
          className="hidden md:block absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-br from-pink-400/25 to-orange-400/25 rounded-full blur-xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10"
      >
        {/* Section Header */}
        <SectionHeader
          tagText="Get To Know Me"
          tagIcon="solar:user-heart-bold"
          heading="About Me"
          description="Crafting digital experiences with passion, precision, and purpose"
          showUnderline={true}
          centered={true}
        />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-start px-4">
          {/* Main Profile Section */}
          <motion.div variants={itemVariants} className="lg:col-span-8">
            <div className="space-y-6 md:space-y-8">
              {/* Introduction Card */}
              <div className="relative p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/90 to-white/50 dark:from-gray-800/90 dark:to-gray-900/50 backdrop-blur-xl border border-white/30 dark:border-gray-700/40 shadow-2xl">
                {/* Decorative Elements */}
                <div className="absolute top-4 md:top-6 right-4 md:right-6 w-3 md:w-4 h-3 md:h-4 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute top-4 md:top-6 right-10 md:right-14 w-2 md:w-3 h-2 md:h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                <div className="hidden md:block absolute top-6 right-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>

                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white flex items-center gap-2 md:gap-3">
                      <span className="text-2xl sm:text-3xl md:text-4xl">
                        👋
                      </span>
                      Hello, I&apos;m Eshayat Al-Wasiu
                    </h3>
                    <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-4 md:mb-6">
                      A passionate{" "}
                      <span className="font-bold text-blue-600 dark:text-blue-400">
                        Full Stack Developer
                      </span>{" "}
                      with
                      <span className="font-bold text-green-600 dark:text-green-400">
                        {" "}
                        5+ years
                      </span>{" "}
                      of experience crafting digital experiences that users
                      love.
                    </p>
                  </div>

                  {/* Expanded About Content */}
                  <div className="space-y-3 md:space-y-4 border-t border-gray-200/50 dark:border-gray-700/50 pt-4 md:pt-6">
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      I'm Eshayat Al-Wasiu, a passionate frontend web developer
                      and a designer. With 5 years of experience crafting
                      digital experiences, I specialize in transforming ideas
                      into engaging and functional websites. My skill set
                      encompasses frontend development, web design, and graphics
                      design, allowing me to deliver comprehensive solutions
                      tailored to my clients' needs. I'm providing service
                      worldwide.
                    </p>
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      Currently, I'm focusing on improving my skills. I'm always
                      eager to collaborate on new projects and explore
                      innovative technologies and new ideas.
                    </p>
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      I'm always open for new opportunities and collaborations.
                      Let's bring your vision to life!
                    </p>
                  </div>

                  {/* Skills Highlight */}
                  <div className="border-t border-gray-200/50 dark:border-gray-700/50 pt-4 md:pt-6">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-3 md:mb-4 flex items-center gap-2">
                      <Icon
                        icon="solar:lightning-bold"
                        className="text-yellow-500 w-4 md:w-5 h-4 md:h-5"
                        width={20}
                        height={20}
                      />
                      Core Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {[
                        "React",
                        "NodeJS",
                        "JavaScript",
                        "Firebase",
                        "MongoDB",
                        "UI/UX Design",
                      ].map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.2 + index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -1 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 text-gray-800 dark:text-gray-200 rounded-lg md:rounded-xl border border-blue-200/50 dark:border-blue-800/30 hover:shadow-lg transition-all duration-300"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Sidebar */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 space-y-6 mt-6 lg:mt-0"
          >
            {/* Contact Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50/90 to-pink-50/90 dark:from-purple-950/30 dark:to-pink-950/30 backdrop-blur-sm border border-white/30 dark:border-gray-700/40 shadow-xl">
              <h4 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Icon
                  icon="solar:chat-round-dots-bold"
                  className="text-purple-500 w-5 h-5"
                  width={20}
                  height={20}
                />
                Let&apos;s Connect
              </h4>
              <div className="space-y-3">
                <motion.a
                  href="mailto:contact@eshayat.com"
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/70 dark:bg-gray-800/30 hover:bg-white/90 dark:hover:bg-gray-800/50 transition-all duration-300 group border border-white/20 dark:border-gray-700/30"
                >
                  <div className="p-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-md group-hover:from-orange-600 group-hover:to-red-600 transition-all shadow-md">
                    <Icon
                      icon="solar:letter-bold"
                      className="text-white w-4 h-4"
                      width={16}
                      height={16}
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white break-all">
                      contact@eshayat.com
                    </div>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/70 dark:bg-gray-800/30 border border-white/20 dark:border-gray-700/30"
                >
                  <div className="p-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md shadow-md">
                    <Icon
                      icon="solar:global-bold"
                      className="text-white w-4 h-4"
                      width={16}
                      height={16}
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">
                      eshayat.com
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/70 dark:bg-gray-800/30"
                >
                  <div className="p-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-md shadow-md border border-white/20 dark:border-gray-700/30">
                    <Icon
                      icon="solar:map-point-bold"
                      className="text-white w-4 h-4"
                      width={16}
                      height={16}
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">
                      Dhaka, bangladesh
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Available for Hire */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50/90 to-cyan-50/90 dark:from-emerald-950/30 dark:to-cyan-950/30 backdrop-blur-sm border border-white/30 dark:border-gray-700/40 shadow-xl">
              <h4 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Icon
                  icon="solar:rocket-bold"
                  className="text-emerald-600 w-5 h-5"
                  width={20}
                  height={20}
                />
                Available for Hire
              </h4>
              <div className="space-y-3.5">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.0 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-green-100/70 dark:bg-gray-800/30  transition-all duration-300 group border border-white/20 dark:border-gray-700/30"
                >
                  <Icon
                    icon="solar:check-circle-bold"
                    className="text-green-600 w-5 h-5"
                    width={20}
                    height={20}
                  />
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-300">
                    Open to new opportunities
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-green-100/70 dark:bg-gray-800/30  transition-all duration-300 group border border-white/20 dark:border-gray-700/30"
                >
                  <svg
                    className="text-blue-400 w-5 h-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M11.944 7.768A.1.1 0 0 1 12 7.75c.004 0 .021 0 .056.018a.7.7 0 0 1 .17.134c.153.158.328.431.492.841c.162.404.296.901.39 1.466q.083.502.118 1.041h-2.452q.035-.539.118-1.04a7 7 0 0 1 .39-1.467c.164-.41.34-.683.492-.841a.7.7 0 0 1 .17-.134M9.271 11.25c.025-.439.073-.871.141-1.286a9 9 0 0 1 .415-1.617a4.25 4.25 0 0 0-2.01 2.903zm-1.454 1.5H9.27c.025.439.073.871.141 1.286a9 9 0 0 0 .415 1.617a4.25 4.25 0 0 1-2.01-2.903m8.367-1.5a4.25 4.25 0 0 0-2.01-2.903c.18.486.318 1.034.415 1.617c.068.415.116.847.14 1.286zm-1.454 1.5h1.454a4.25 4.25 0 0 1-2.01 2.903c.18-.486.318-1.034.415-1.617c.068-.415.116-.847.14-1.286m-1.502 0a11 11 0 0 1-.118 1.04a7 7 0 0 1-.39 1.467c-.164.41-.34.683-.492.841a.7.7 0 0 1-.17.134a.1.1 0 0 1-.056.018c-.004 0-.021 0-.056-.018a.7.7 0 0 1-.17-.134c-.153-.158-.328-.431-.492-.841a7 7 0 0 1-.39-1.466a11 11 0 0 1-.118-1.041z"
                    />
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M3.378 5.082C3 5.62 3 7.22 3 10.417v1.574c0 5.638 4.239 8.375 6.899 9.536c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473C16.761 20.365 21 17.63 21 11.991v-1.574c0-3.198 0-4.797-.378-5.335c-.377-.537-1.88-1.052-4.887-2.081l-.573-.196C13.595 2.268 12.812 2 12 2s-1.595.268-3.162.805L8.265 3c-3.007 1.03-4.51 1.545-4.887 2.082M6.25 12a5.75 5.75 0 1 1 11.5 0a5.75 5.75 0 0 1-11.5 0"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-300">
                    Open for website development
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.4 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-green-100/70 dark:bg-gray-800/30  transition-all duration-300 group border border-white/20 dark:border-gray-700/30"
                >
                  <svg
                    className="text-indigo-500 w-5 h-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M14 2h-4C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10v1q-.002.827.007 1.5h10.595c.103-.68.336-1.387.923-1.975c.618-.618 1.37-.843 2.08-.938c.646-.087 1.44-.087 2.305-.087h.18c.865 0 1.659 0 2.304.087c.538.072 1.098.218 1.606.551V10c0-3.771 0-5.657-1.172-6.828S17.771 2 14 2M2.879 16.121C3.757 17 5.172 17 8 17h3.25v4H8a.75.75 0 0 0 0 1.5h5.55l-.025-.025c-.618-.618-.843-1.37-.938-2.08c-.087-.646-.087-1.44-.087-2.305v-3.18c0-.498 0-.973.017-1.41H2.038c.07 1.258.271 2.052.84 2.621"
                    />
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M22 15v3c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18v-3c0-1.886 0-2.828.586-3.414S16.114 11 18 11s2.828 0 3.414.586S22 13.114 22 15m-5.75 5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-300">
                    Open for designing projects
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
