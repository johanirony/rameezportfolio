// "use client";
// import React, { useState } from "react";
// import GithubIcon from "../../public/github-icon.svg";
// import LinkedinIcon from "../../public/linkedin-icon.svg";
// import Link from "next/link";
// import Image from "next/image";

// const EmailSection = () => {
//   const [emailSubmitted, setEmailSubmitted] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = {
//       email: e.target.email.value,
//       subject: e.target.subject.value,
//       message: e.target.message.value,
//     };
//     const JSONdata = JSON.stringify(data);
//     const endpoint = "/api/send";

//     // Form the request for sending data to the server.
//     const options = {
//       // The method is POST because we are sending data.
//       method: "POST",
//       // Tell the server we're sending JSON.
//       headers: {
//         "Content-Type": "application/json",
//       },
//       // Body of the request is the JSON data we created above.
//       body: JSONdata,
//     };

//     const response = await fetch(endpoint, options);
//     const resData = await response.json();

//     if (response.status === 200) {
//       console.log("Message sent.");
//       setEmailSubmitted(true);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
//     >
//       <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
//       <div className="z-10">
//         <h5 className="text-xl font-bold text-white my-2">
//           Let&apos;s Connect
//         </h5>
//         <p className="text-[#ADB7BE] mb-4 max-w-md">
//           {" "}
//           I&apos;m currently looking for new opportunities, my inbox is always
//           open. Whether you have a question or just want to say hi, I&apos;ll
//           try my best to get back to you!
//         </p>
//         <div className="socials flex flex-row gap-2">
//           <Link href={"https://github.com/johanirony"}>
//             <Image src={GithubIcon} alt="Github Icon" />
//           </Link>
//           <Link href="https://www.linkedin.com/in/rameezshaikh0811/">
//             <Image src={LinkedinIcon} alt="Linkedin Icon" />
//           </Link>
//         </div>
//       </div>
//       <div>
//         {emailSubmitted ? (
//           <p className="text-green-500 text-sm mt-2">
//             Email sent successfully!
//           </p>
//         ) : (
//           <form className="flex flex-col" onSubmit={handleSubmit}>
//             <div className="mb-6">
//               <label
//                 htmlFor="email"
//                 className="text-white block mb-2 text-sm font-medium"
//               >
//                 Your email
//               </label>
//               <input
//                 name="email"
//                 type="email"
//                 id="email"
//                 required
//                 className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="jacob@google.com"
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 htmlFor="subject"
//                 className="text-white block text-sm mb-2 font-medium"
//               >
//                 Subject
//               </label>
//               <input
//                 name="subject"
//                 type="text"
//                 id="subject"
//                 required
//                 className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="Just saying hi"
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 htmlFor="message"
//                 className="text-white block text-sm mb-2 font-medium"
//               >
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 id="message"
//                 className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="Let's talk about..."
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
//             >
//               Send Message
//             </button>
//           </form>
//         )}
//       </div>
//     </section>
//   );
// };

// export default EmailSection;
"use client"
import { useState } from "react";
import Head from "next/head";

export default function EmailSection() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
      console.log("Call send API here")
    }
    return (
        <main
            className={`flex flex-col items-center p-24 min-h-screen`}
        >
            <Head>
                <title>Contact Me | Coffeed</title>
            </Head>

            <div className="relative flex flex-col gap-4 ">
                <div className="flex flex-col place-items-center gap-4">
                    <h1 className={`m-0 text-center text-3xl`}>Contact Me</h1>
                </div>
                <form
                    className="mt-6 flex flex-col max-w-xl gap-4 z-10"
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="name" className="sr-only">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={name}
                        className="rounded-md bg-white/5 px-3.5 py-2.5 text-white ring-1 ring-inset focus:ring-blue-600 text-sm md:w-96"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="email-address" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        className="rounded-md bg-white/5 px-3.5 py-2.5 text-white ring-1 ring-inset focus:ring-blue-600 text-sm md:w-96"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="flex justify-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                    >
                        {loading ? (
                            <div
                                style={{
                                    borderTopColor: "transparent",
                                }}
                                className="w-6 h-6 border-4 border-white border-solid rounded-full animate-spin"
                            ></div>
                        ) : (
                            "Submit"
                        )}
                    </button>
                </form>
            </div>
        </main>
    );
}