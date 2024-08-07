<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>A1SATTAKING</title>
    <link rel="stylesheet" href="styles.css">
    <script>
        function displayValues() {
            const cityName1 = localStorage.getItem("cityName1") || "अयोध्या";
            const cityName2 = localStorage.getItem("cityName2") || "गली";
            const number = localStorage.getItem("number") || "89";
            document.getElementById("cityName1").textContent = cityName1;
            document.getElementById("cityName2").textContent = cityName2;
            document.getElementById("number").textContent = number;
        }

        window.addEventListener("storage", displayValues);

        document.addEventListener("DOMContentLoaded", displayValues);
    </script>
</head>

<body>


    <nav class="navbar">
        <ul class="navbar-menu">
            <button>HOME</button>

            <button>CONTACT
            </button>

            <button>LOGIN
            </button>

        </ul>
        <!-- <div class="tooltip-container">
            <span class="tooltip">
                <div class="table center">
                    <div class="monitor-wrapper center">
                        <div class="monitor center">
                            <p>
                                JOIN OUR GAME FOR MORE EARNING ! OLD USER WILL <BR>ALSO GET 10% OF THERE MONEY AFTER
                                LOSSEING

                            </p>
                        </div>
                    </div>
                </div>
            </span>
            <span class="text">HLO</span>
        </div> -->

        <div
            class="bg-[var(--background)] p-4 rounded-lg border border-dotted border-black max-w-md mx-auto bg-opacity-75 shadow-lg backdrop-blur-lg">
            <div class="text-center mb-4">
                <div class="flex justify-center space-x-2">
                    <span class="bg-purple-500 text-white px-2 py-1 rounded">ॐ</span>
                    <span class="text-lg font-bold">Online khaiwal</span>
                    <span class="bg-purple-500 text-white px-2 py-1 rounded">ॐ</span>
                </div>
                <h1 class="text-2xl font-bold mt-2"> S U M I </h1>
                <p class="text-lg font-semibold">भाई खाईवाल</p>
                <div class="flex justify-center items-center space-x-2 mt-2">
                    <img aria-hidden="true" alt="trident" src="https://openui.fly.dev/openui/24x24.svg?text=👑" />
                </div>
            </div>
            <div class="text-center mb-4">
                <div class="flex justify-center items-center space-x-2">
                    <img aria-hidden="true" alt="clock" src="https://openui.fly.dev/openui/24x24.svg?text=🕰️" />
                    <span class="text-lg font-bold">All Game Timing</span>
                    <img aria-hidden="true" alt="clock" src="https://openui.fly.dev/openui/24x24.svg?text=🕰️" />
                </div>
            </div>

            <div class="flex justify-between items-center bg-transparent">
                <div class="flex items-center space-x-2">
                    <img aria-hidden="true" alt="game-icon" src="https://openui.fly.dev/openui/24x24.svg?text=♟️" />
                    <span>सदर बाजार</span>
                </div>
                <span>= 01.15 PM</span>
            </div>
            <div class="flex justify-between items-center bg-transparent">
                <div class="flex items-center space-x-2">
                    <img aria-hidden="true" alt="game-icon" src="https://openui.fly.dev/openui/24x24.svg?text=♟️" />
                    <span>ग्वालियर</span>
                </div>
                <span>= 02.15 PM</span>
            </div>
            <div class="flex justify-between items-center bg-transparent">
                <div class="flex items-center space-x-2">
                    <img aria-hidden="true" alt="game-icon" src="https://openui.fly.dev/openui/24x24.svg?text=♟️" />
                    <span>दिल्ली बाजार</span>
                </div>
                <span>= 02.55 PM</span>
            </div>
            <div class="flex justify-between items-center bg-transparent">
                <div class="flex items-center space-x-2">
                    <img aria-hidden="true" alt="game-icon" src="https://openui.fly.dev/openui/24x24.svg?text=♟️" />
                    <span>श्री गणेश</span>
                </div>
                <span>= 04.20 PM</span>
            </div>
            <div class="flex justify-between items-center bg-transparent">
                <div class="flex items-center space-x-2">
                    <img aria-hidden="true" alt="game-icon" src="https://openui.fly.dev/openui/24x24.svg?text=♟️" />
                    <span>फरीदाबाद</span>
                </div>
                <span>= 05.45 PM</span>
            </div>
            <div class="flex justify-between items-center bg-transparent">
                <div class="flex items-center space-x-2">
                    <img aria-hidden="true" alt="game-icon" src="https://openui.fly.dev/openui/24x24.svg?text=♟️" />
                    <span>कानपुर सिटी</span>
                </div>
                <span>= 07.00 PM</span>
            </div>
            <div class="flex justify-between items-center bg-transparent">
                <div class="flex items-center space-x-2">
                    <img aria-hidden="true" alt="game-icon" src="https://openui.fly.dev/openui/24x24.svg?text=♟️" />
                    <span>गाज़ियाबाद</span>
                </div>
                <span>= 08.20 PM</span>
            </div>
            <div class="flex justify-between items-center bg-transparent">
                <div class="flex items-center space-x-2">
                    <img aria-hidden="true" alt="game-icon" src="https://openui.fly.dev/openui/24x24.svg?text=♟️" />
                    <span>अयोध्या</span>
                </div>
                <span>= 09.40 PM</span>
            </div>
            <div class="flex justify-between items-center bg-transparent">
                <div class="flex items-center space-x-2">
                    <img aria-hidden="true" alt="game-icon" src="https://openui.fly.dev/openui/24x24.svg?text=♟️" />
                    <span>गली</span>
                </div>
                <span>= 11.20 PM</span>
            </div>
            <div class="flex justify-between items-center bg-transparent">
                <div class="flex items-center space-x-2">
                    <img aria-hidden="true" alt="game-icon" src="https://openui.fly.dev/openui/24x24.svg?text=♟️" />
                    <span>दिसावर</span>
                </div>
                <span>= 01.20 AM</span>
            </div>

            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
            <script src="https://unpkg.com/unlazy@0.11.3/dist/unlazy.with-hashing.iife.js" defer init></script>
            <script type="text/javascript">
                window.tailwind.config = {
                    darkMode: ['class'],
                    theme: {
                        extend: {
                            colors: {
                                border: 'hsl(var(--border))',
                                input: 'hsl(var(--input))',
                                ring: 'hsl(var(--ring))',
                                background: 'hsl(var(--background))',
                                foreground: 'hsl(var(--foreground))',
                                primary: {
                                    DEFAULT: 'hsl(var(--primary))',
                                    foreground: 'hsl(var(--primary-foreground))'
                                },
                                secondary: {
                                    DEFAULT: 'hsl(var(--secondary))',
                                    foreground: 'hsl(var(--secondary-foreground))'
                                },
                                destructive: {
                                    DEFAULT: 'hsl(var(--destructive))',
                                    foreground: 'hsl(var(--destructive-foreground))'
                                },
                                muted: {
                                    DEFAULT: 'hsl(var(--muted))',
                                    foreground: 'hsl(var(--muted-foreground))'
                                },
                                accent: {
                                    DEFAULT: 'hsl(var(--accent))',
                                    foreground: 'hsl(var(--accent-foreground))'
                                },
                                popover: {
                                    DEFAULT: 'hsl(var(--popover))',
                                    foreground: 'hsl(var(--popover-foreground))'
                                },
                                card: {
                                    DEFAULT: 'hsl(var(--card))',
                                    foreground: 'hsl(var(--card-foreground))'
                                },
                            },
                        }
                    }
                }
            </script>
            <style type="text/tailwindcss">
                @layer base {
				:root {
					--background: 0 0% 100%;
--foreground: 240 10% 3.9%;
--card: 0 0% 100%;
--card-foreground: 240 10% 3.9%;
--popover: 0 0% 100%;
--popover-foreground: 240 10% 3.9%;
--primary: 240 5.9% 10%;
--primary-foreground: 0 0% 98%;
--secondary: 240 4.8% 95.9%;
--secondary-foreground: 240 5.9% 10%;
--muted: 240 4.8% 95.9%;
--muted-foreground: 240 3.8% 46.1%;
--accent: 240 4.8% 95.9%;
--accent-foreground: 240 5.9% 10%;
--destructive: 0 84.2% 60.2%;
--destructive-foreground: 0 0% 98%;
--border: 240 5.9% 90%;
--input: 240 5.9% 90%;
--ring: 240 5.9% 10%;
--radius: 0.5rem;
				}
				.dark {
					--background: 240 10% 3.9%;
--foreground: 0 0% 98%;
--card: 240 10% 3.9%;
--card-foreground: 0 0% 98%;
--popover: 240 10% 3.9%;
--popover-foreground: 0 0% 98%;
--primary: 0 0% 98%;
--primary-foreground: 240 5.9% 10%;
--secondary: 240 3.7% 15.9%;
--secondary-foreground: 0 0% 98%;
--muted: 240 3.7% 15.9%;
--muted-foreground: 240 5% 64.9%;
--accent: 240 3.7% 15.9%;
--accent-foreground: 0 0% 98%;
--destructive: 0 62.8% 30.6%;
--destructive-foreground: 0 0% 98%;
--border: 240 3.7% 15.9%;
--input: 240 3.7% 15.9%;
--ring: 240 4.9% 83.9%;
				}
			}
		</style>




            <div class="flex flex-col items-center p-4 space-y-4">
                <div class="bg-transparent-400 text-center p-4 w-full">
                    <!-- <p class="text-black font-semibold">A1-ROYALSATTA BEST SITE SATTA RESULT</p> -->
                    <button class="button" data-text="Awesome">
                        <span class="actual-text">A1SATTAKING</span>
                        <span aria-hidden="true" class="hover-text">WELCOME</span>
                    </button>
                    <!-- <h1 class="text-white text-2xl font-bold">WWW.A1-ROYALSATTA.IN</h1> -->
                </div>




                <div class="timer">
                    <span id="hours">00</span>:<span id="minutes">00</span>:<span id="seconds">00</span>
                </div>
                <script src="index.js"></script>
                <h2 class="text-black text-xl font-semibold">A1SATTAKING Live Result Today</h2>
                <p id="cityName1" class="text-pink-500 text-2xl font-bold">रायपुर & मथुरा</p>

                <p id="number" class="text-green-500 text-3xl font-bold">97 & 56</p>
                <p id="cityName2" class="text-pink-500 text-2xl font-bold">गाजियाबाद


                </p>
                <!-- <div id="spinner"></div> -->
                <div class="spinner">
                    <div class="spinnerin"></div>
                </div>
</body>
</div>



<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
<script src="https://unpkg.com/unlazy@0.11.3/dist/unlazy.with-hashing.iife.js" defer init></script>
<script type="text/javascript">
    window.tailwind.config = {
        darkMode: ['class'],
        theme: {
            extend: {
                colors: {
                    border: 'hsl(var(--border))',
                    input: 'hsl(var(--input))',
                    ring: 'hsl(var(--ring))',
                    background: 'hsl(var(--background))',
                    foreground: 'hsl(var(--foreground))',
                    primary: {
                        DEFAULT: 'hsl(var(--primary))',
                        foreground: 'hsl(var(--primary-foreground))'
                    },
                    secondary: {
                        DEFAULT: 'hsl(var(--secondary))',
                        foreground: 'hsl(var(--secondary-foreground))'
                    },
                    destructive: {
                        DEFAULT: 'hsl(var(--destructive))',
                        foreground: 'hsl(var(--destructive-foreground))'
                    },
                    muted: {
                        DEFAULT: 'hsl(var(--muted))',
                        foreground: 'hsl(var(--muted-foreground))'
                    },
                    accent: {
                        DEFAULT: 'hsl(var(--accent))',
                        foreground: 'hsl(var(--accent-foreground))'
                    },
                    popover: {
                        DEFAULT: 'hsl(var(--popover))',
                        foreground: 'hsl(var(--popover-foreground))'
                    },
                    card: {
                        DEFAULT: 'hsl(var(--card))',
                        foreground: 'hsl(var(--card-foreground))'
                    },
                },
            }
        }
    }
</script>
<style type="text/tailwindcss">
    @layer base {
				:root {
					--background: 0 0% 100%;
--foreground: 240 10% 3.9%;
--card: 0 0% 100%;
--card-foreground: 240 10% 3.9%;
--popover: 0 0% 100%;
--popover-foreground: 240 10% 3.9%;
--primary: 240 5.9% 10%;
--primary-foreground: 0 0% 98%;
--secondary: 240 4.8% 95.9%;
--secondary-foreground: 240 5.9% 10%;
--muted: 240 4.8% 95.9%;
--muted-foreground: 240 3.8% 46.1%;
--accent: 240 4.8% 95.9%;
--accent-foreground: 240 5.9% 10%;
--destructive: 0 84.2% 60.2%;
--destructive-foreground: 0 0% 98%;
--border: 240 5.9% 90%;
--input: 240 5.9% 90%;
--ring: 240 5.9% 10%;
--radius: 0.5rem;
				}
				.dark {
					--background: 240 10% 3.9%;
--foreground: 0 0% 98%;
--card: 240 10% 3.9%;
--card-foreground: 0 0% 98%;
--popover: 240 10% 3.9%;
--popover-foreground: 0 0% 98%;
--primary: 0 0% 98%;
--primary-foreground: 240 5.9% 10%;
--secondary: 240 3.7% 15.9%;
--secondary-foreground: 0 0% 98%;
--muted: 240 3.7% 15.9%;
--muted-foreground: 240 5% 64.9%;
--accent: 240 3.7% 15.9%;
--accent-foreground: 0 0% 98%;
--destructive: 0 62.8% 30.6%;
--destructive-foreground: 0 0% 98%;
--border: 240 3.7% 15.9%;
--input: 240 3.7% 15.9%;
--ring: 240 4.9% 83.9%;
				}
			}
		</style>



<!-- <div class="bg-card text-card-foreground p-4 rounded-lg shadow-lg max-w-md mx-auto">
    <div class="bg-blue-500 text-white p-4 rounded-t-lg text-center">
        <h2 class="text-xl font-bold">अयोध्या

        </h2>
        <p class="text-lg">( 09:40 pm )</p>
        <div class="flex justify-center space-x-4 mt-2">
            <span class="text-xl">{ 58 }</span>
            <span class="text-xl">{ 71 }</span>
        </div>
    </div> -->
<div class="bg-secondary text-secondary-foreground p-4 rounded-b-lg">
    <p class="text-center text-lg">🎊 नमस्कार साथियो 🎊</p>
    <p class="mt-2">आप आपनी गेम सुमि भाई का पास प्ले करलो</p>
    <p class="mt-2 text-center text-xl">👑 | S U M I भाई खाईवाल | 👑</p>
    <p class="mt-2"> रेट है 10 का 970 तोह बिसहस्स प्ले करलो पेमेंट की फुल गारंटी</p>
    // <div class="mt-4 text-center">
    //     <a href="https://wa.me/your-number" class="text-blue-500 font-bold">✓ WHATSAPP CHAT</a>
    // </div>
    // <div class="mt-4 flex justify-center">
    //     <a href="https://wa.me/your-number">
    //         <img src="https://placehold.co/50x50?text=WhatsApp+Icon" alt="WhatsApp Icon" class="w-12 h-12">
    //     </a>
    // </div>
</div>
</div>
</div>
<div class="border-t border-dotted border-black mt-4 pt-4">
    <p class="text-center text-lg mb-4">अपनी गेम डलवाने और अपनी एड (पर्ची) डलवाने के लिए नीचे नीचे नंबर
        पे क्लिक करें</p>
    <div class="group relative flex justify-center items-center text-zinc-600 text-sm font-bold">
        <div
            class="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[150%] -translate-y-[300%] duration-500 group-hover:delay-500 skew-y-[20deg] group-hover:skew-y-0 shadow-md">
            <div class="bg-lime-200 flex items-center gap-1 p-2 rounded-md">
                <svg fill="none" viewBox="0 0 24 24" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"
                    class="stroke-zinc-600">
                    <circle stroke-linejoin="round" r="9" cy="12" cx="12"></circle>
                    <path stroke-linejoin="round" d="M12 3C12 3 8.5 6 8.5 12C8.5 18 12 21 12 21"></path>
                    <path stroke-linejoin="round" d="M12 3C12 3 15.5 6 15.5 12C15.5 18 12 21 12 21"></path>
                    <path stroke-linejoin="round" d="M3 12H21"></path>
                    <path stroke-linejoin="round" d="M19.5 7.5H4.5"></path>
                    <g filter="url(#filter0_d_15_556)">
                        <path stroke-linejoin="round" d="M19.5 16.5H4.5"></path>
                    </g>
                    <defs>
                        <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="3" width="17"
                            y="16" x="3.5" id="filter0_d_15_556">
                            <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
                            <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                type="matrix" in="SourceAlpha"></feColorMatrix>
                            <feOffset dy="1"></feOffset>
                            <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" type="matrix">
                            </feColorMatrix>
                            <feBlend result="effect1_dropShadow_15_556" in2="BackgroundImageFix" mode="normal">
                            </feBlend>
                            <feBlend result="shape" in2="effect1_dropShadow_15_556" in="SourceGraphic" mode="normal">
                            </feBlend>
                        </filter>
                    </defs>
                </svg>
                <span>https://chat.whatsapp.com/Ks12Q7zLhGqDI1sgLPoHSh</span>
            </div>
            <div
                class="shadow-md bg-lime-200 absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1">
            </div>
            <div
                class="rounded-md bg-white group-hover:opacity-0 group-hover:scale-[115%] group-hover:delay-700 duration-500 w-full h-full absolute top-0 left-0">
                <div
                    class="border-b border-r border-white bg-white absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1">
                </div>
            </div>
        </div>

        <div
            class="shadow-md flex items-center group-hover:gap-2 bg-gradient-to-br from-lime-200 to-yellow-200 p-3 rounded-full cursor-pointer duration-300">
            <svg fill="none" viewBox="0 0 24 24" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"
                class="fill-zinc-600">
                <path stroke-linejoin="round" stroke-linecap="round"
                    d="M15.4306 7.70172C7.55045 7.99826 3.43929 15.232 2.17021 19.3956C2.07701 19.7014 2.31139 20 2.63107 20C2.82491 20 3.0008 19.8828 3.08334 19.7074C6.04179 13.4211 12.7066 12.3152 15.514 12.5639C15.7583 12.5856 15.9333 12.7956 15.9333 13.0409V15.1247C15.9333 15.5667 16.4648 15.7913 16.7818 15.4833L20.6976 11.6784C20.8723 11.5087 20.8993 11.2378 20.7615 11.037L16.8456 5.32965C16.5677 4.92457 15.9333 5.12126 15.9333 5.61253V7.19231C15.9333 7.46845 15.7065 7.69133 15.4306 7.70172Z">
                </path>
            </svg><span class="text-[0px] group-hover:text-sm duration-300">Check Our Whatsapp group</span>
        </div>
    </div>

    <div class="text-center">
        <a href="https://wa.me/918053023797"
            class="text-green-500 text-lg font-bold">https://chat.whatsapp.com/Ks12Q7zLhGqDI1sgLPoHSh</a>
    </div>
</div>
</div>



<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
<script src="https://unpkg.com/unlazy@0.11.3/dist/unlazy.with-hashing.iife.js" defer init></script>
<script type="text/javascript">
    window.tailwind.config = {
        darkMode: ['class'],
        theme: {
            extend: {
                colors: {
                    border: 'hsl(var(--border))',
                    input: 'hsl(var(--input))',
                    ring: 'hsl(var(--ring))',
                    background: 'hsl(var(--background))',
                    foreground: 'hsl(var(--foreground))',
                    primary: {
                        DEFAULT: 'hsl(var(--primary))',
                        foreground: 'hsl(var(--primary-foreground))'
                    },
                    secondary: {
                        DEFAULT: 'hsl(var(--secondary))',
                        foreground: 'hsl(var(--secondary-foreground))'
                    },
                    destructive: {
                        DEFAULT: 'hsl(var(--destructive))',
                        foreground: 'hsl(var(--destructive-foreground))'
                    },
                    muted: {
                        DEFAULT: 'hsl(var(--muted))',
                        foreground: 'hsl(var(--muted-foreground))'
                    },
                    accent: {
                        DEFAULT: 'hsl(var(--accent))',
                        foreground: 'hsl(var(--accent-foreground))'
                    },
                    popover: {
                        DEFAULT: 'hsl(var(--popover))',
                        foreground: 'hsl(var(--popover-foreground))'
                    },
                    card: {
                        DEFAULT: 'hsl(var(--card))',
                        foreground: 'hsl(var(--card-foreground))'
                    },
                },
            }
        }
    }
</script>


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
<script src="https://unpkg.com/unlazy@0.11.3/dist/unlazy.with-hashing.iife.js" defer init></script>
<script type="text/javascript">
    window.tailwind.config = {
        darkMode: ['class'],
        theme: {
            extend: {
                colors: {
                    border: 'hsl(var(--border))',
                    input: 'hsl(var(--input))',
                    ring: 'hsl(var(--ring))',
                    background: 'hsl(var(--background))',
                    foreground: 'hsl(var(--foreground))',
                    primary: {
                        DEFAULT: 'hsl(var(--primary))',
                        foreground: 'hsl(var(--primary-foreground))'
                    },
                    secondary: {
                        DEFAULT: 'hsl(var(--secondary))',
                        foreground: 'hsl(var(--secondary-foreground))'
                    },
                    destructive: {
                        DEFAULT: 'hsl(var(--destructive))',
                        foreground: 'hsl(var(--destructive-foreground))'
                    },
                    muted: {
                        DEFAULT: 'hsl(var(--muted))',
                        foreground: 'hsl(var(--muted-foreground))'
                    },
                    accent: {
                        DEFAULT: 'hsl(var(--accent))',
                        foreground: 'hsl(var(--accent-foreground))'
                    },
                    popover: {
                        DEFAULT: 'hsl(var(--popover))',
                        foreground: 'hsl(var(--popover-foreground))'
                    },
                    card: {
                        DEFAULT: 'hsl(var(--card))',
                        foreground: 'hsl(var(--card-foreground))'
                    },
                },
            }
        }
    }
</script>
<style type="text/tailwindcss">
    @layer base {
				:root {
					--background: 0 0% 100%;
--foreground: 240 10% 3.9%;
--card: 0 0% 100%;
--card-foreground: 240 10% 3.9%;
--popover: 0 0% 100%;
--popover-foreground: 240 10% 3.9%;
--primary: 240 5.9% 10%;
--primary-foreground: 0 0% 98%;
--secondary: 240 4.8% 95.9%;
--secondary-foreground: 240 5.9% 10%;
--muted: 240 4.8% 95.9%;
--muted-foreground: 240 3.8% 46.1%;
--accent: 240 4.8% 95.9%;
--accent-foreground: 240 5.9% 10%;
--destructive: 0 84.2% 60.2%;
--destructive-foreground: 0 0% 98%;
--border: 240 5.9% 90%;
--input: 240 5.9% 90%;
--ring: 240 5.9% 10%;
--radius: 0.5rem;
				}
				.dark {
					--background: 240 10% 3.9%;
--foreground: 0 0% 98%;
--card: 240 10% 3.9%;
--card-foreground: 0 0% 98%;
--popover: 240 10% 3.9%;
--popover-foreground: 0 0% 98%;
--primary: 0 0% 98%;
--primary-foreground: 240 5.9% 10%;
--secondary: 240 3.7% 15.9%;
--secondary-foreground: 0 0% 98%;
--muted: 240 3.7% 15.9%;
--muted-foreground: 240 5% 64.9%;
--accent: 240 3.7% 15.9%;
--accent-foreground: 0 0% 98%;
--destructive: 0 62.8% 30.6%;
--destructive-foreground: 0 0% 98%;
--border: 240 3.7% 15.9%;
--input: 240 3.7% 15.9%;
--ring: 240 4.9% 83.9%;
				}
			}
		</style>



<div class="overflow-x-auto">
    <table class="min-w-full border-collapse border border-transparent-500">
        <thead>
            <tr class="bg-transparent text-white">
                <th class="border border-transparent-500 p-2">सट्टा का नाम</th>
                <th class="border border-transparent-500 p-2">कल आया था</th>
                <th class="border border-transparent-500 p-2">आज का रिज़ल्ट</th>
            </tr>
        </thead>
        <tbody>

            <td class="border border-transparent-500 p-2 bg-transparent-500 text-white">
                <div>दिसावर</div>
                <div class="text-transparent-500">01:20 Am</div>
                <div>Record Chart</div>
            </td>
            <td class="border border-transparent-500 p-2 bg-zinc-100 text-black">46</td>
            <td class="border border-transparent-500 p-2 bg-zinc-100 text-black">47</td>
            </tr>
            <td class="border border-transparent-500 p-2 bg-transparent-500 text-white">
                <div>आजमगढ़
                </div>
                <div class="text-transparent-500">11:20 am</div>
                <div>Record Chart</div>
            </td>
            <td class="border border-transparent-500 p-2 bg-zinc-100 text-black">25</td>
            <td class="border border-transparent-500 p-2 bg-zinc-100 text-black">25</td>
            </tr>
            <td class="border border-transparent-500 p-2 bg-transparent-500 text-white">
                <div>गोरखपुर

                </div>
                <div class="text-transparent-500">12:10 pm</div>
                <div>Record Chart</div>
            </td>
            <td class="border border-transparent-500 p-2 bg-zinc-100 text-black">91</td>

            <td class="border border-transparent-500 p-2 bg-zinc-100 text-black">98</td>

            <tr>
            <tr>
                <td class="border border-transparent-500 p-2 bg-transparent-500 text-white">
                    <div>सदर बाजार</div>
                    <div class="text-transparent-500">01:15 Pm</div>
                    <div>Record Chart</div>
                </td>
                <td class="border border-transparent-500 p-2 bg-zinc-100 text-black">00</td>

                <td class="border border-transparent-500 p-2 bg-zinc-100 text-black">15</td>
            </tr>
            <tr>
                <td class="border border-transparent-500 p-2 bg-transparent-500 text-white">
                    <div>ग्वालियर</div>
                    <div class="text-transparent-500">02:15 Pm</div>
                    <div>Record Chart</div>
                </td>
                <td class="border border-transparent-500 p-2 bg-zinc-100 text-black">18</td>
                <td class="border border-transparent-500 p-2 bg-zinc-100 text-black">92</td>
            </tr>
            <tr>
                <td class="border border-transparent-500 p-2 bg-transparent-500 text-white">
                    <div>दिल्लीबाजार</div>
                    <div class="text-transparent-500">02:55 Pm</div>
                    <div>Record Chart</div>
                </td>
                <td class="border border-transparent-500 p-2 bg-zinc-100 text-black">01</td>
                <td class="border border-transparent-500 p-2 bg-zinc-100 text-black"></td>
            </tr>
            <tr>
                <td class="border border-transparent-500 p-2 bg-transparent-500 text-white">
                    <div>श्री गणेश</div>
                    <div class="text-transparent-500">04:20 Pm</div>
                    <div>Record Chart</div>
                </td>
                <td class="border border-transparent-500 p-2 bg-zinc-100 text-black">75</td>
                <td class="border border-transparent-500 p-2 bg-zinc-100 text-black"></td>
            </tr>
            <tr>
                <td class="border border-transparent-500 p-2 bg-transparent-500 text-white">
                    <div>फरीदाबाद</div>
                    <div class="text-transparent-500">05:45 Pm</div>
                    <div>Record Chart</div>
                </td>
                <td class="border border-transparent-500 p-2 bg-zinc-100 text-black">20</td>


                <td class="border border-transparent-500 p-2 bg-zinc-100 text-black"></td>
            </tr>
            <tr>
                <td class="border border-transparent-500 p-2 bg-transparent-500 text-white">
                    <div>मथुरा
                    </div>
                    <div class="text-transparent-500">07:00 pm</div>
                    <div>Record Chart</div>
                </td>
                <td class="border border-transparent-500 p-2 bg-zinc-100 text-black">61</td>

                <td class="border border-transparent-500 p-2 bg-zinc-100 text-black"></td>
            </tr>
            <tr>
                <td class="border border-transparent-500 p-2 bg-transparent-500 text-white">
                    <div>रायपुर
                    </div>
                    <div class="text-transparent-500">07:00 pm</div>
                    <div>Record Chart</div>
                </td>
                <td class="border border-transparent-500 p-2 bg-zinc-100 text-black">75</td>
                <td class="border border-transparent-500 p-2 bg-zinc-100 text-black"></td>
            </tr>

            <tr>
                <td class="border border-transparent-500 p-2 bg-transparent-500 text-white">
                    <div>गाज़ियाबाद</div>
                    <div class="text-transparent-500">08:20 Pm</div>
                    <div>Record Chart</div>
                </td>
                <td class="border border-transparent-500 p-2 bg-zinc-100 text-black">71</td>
                <td class="border border-transparent-500 p-2 bg-zinc-100 text-black"></td>
            </tr>
            <tr>
                <td class="border border-transparent-500 p-2 bg-transparent-500 text-white">
                    <div>अयोध्या
                    </div>
                    <div class="text-transparent-500">09:40 Pm</div>
                    <div>Record Chart</div>
                </td>
                <td class="border border-transparent-500 p-2 bg-zinc-100 text-black">56</td>
                <td class="border border-transparent-500 p-2 bg-zinc-100 text-black"></td>
            </tr>
            <tr>
                <td class="border border-transparent-500 p-2 bg-transparent-500 text-white">
                    <div>गली</div>
                    <div class="text-transparent-500">11:20 Pm</div>
                    <div>Record Chart</div>
                </td>
                <td class="border border-transparent-500 p-2 bg-zinc-100 text-black">56</td>
                <td class="border border-transparent-500 p-2 bg-zinc-100 text-black"></td>
            </tr>
        </tbody>
    </table>
</div>


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
<script src="https://unpkg.com/unlazy@0.11.3/dist/unlazy.with-hashing.iife.js" defer init></script>
<script type="text/javascript">
    window.tailwind.config = {
        darkMode: ['class'],
        theme: {
            extend: {
                colors: {
                    border: 'hsl(var(--border))',
                    input: 'hsl(var(--input))',
                    ring: 'hsl(var(--ring))',
                    background: 'hsl(var(--background))',
                    foreground: 'hsl(var(--foreground))',
                    primary: {
                        DEFAULT: 'hsl(var(--primary))',
                        foreground: 'hsl(var(--primary-foreground))'
                    },
                    secondary: {
                        DEFAULT: 'hsl(var(--secondary))',
                        foreground: 'hsl(var(--secondary-foreground))'
                    },
                    destructive: {
                        DEFAULT: 'hsl(var(--destructive))',
                        foreground: 'hsl(var(--destructive-foreground))'
                    },
                    muted: {
                        DEFAULT: 'hsl(var(--muted))',
                        foreground: 'hsl(var(--muted-foreground))'
                    },
                    accent: {
                        DEFAULT: 'hsl(var(--accent))',
                        foreground: 'hsl(var(--accent-foreground))'
                    },
                    popover: {
                        DEFAULT: 'hsl(var(--popover))',
                        foreground: 'hsl(var(--popover-foreground))'
                    },
                    card: {
                        DEFAULT: 'hsl(var(--card))',
                        foreground: 'hsl(var(--card-foreground))'
                    },
                },
            }
        }
    }
</script>
<style type="text/tailwindcss">
    @layer base {
				:root {
					--background: 0 0% 100%;
--foreground: 240 10% 3.9%;
--card: 0 0% 100%;
--card-foreground: 240 10% 3.9%;
--popover: 0 0% 100%;
--popover-foreground: 240 10% 3.9%;
--primary: 240 5.9% 10%;
--primary-foreground: 0 0% 98%;
--secondary: 240 4.8% 95.9%;
--secondary-foreground: 240 5.9% 10%;
--muted: 240 4.8% 95.9%;
--muted-foreground: 240 3.8% 46.1%;
--accent: 240 4.8% 95.9%;
--accent-foreground: 240 5.9% 10%;
--destructive: 0 84.2% 60.2%;
--destructive-foreground: 0 0% 98%;
--border: 240 5.9% 90%;
--input: 240 5.9% 90%;
--ring: 240 5.9% 10%;
--radius: 0.5rem;
				}
				.dark {
					--background: 240 10% 3.9%;
--foreground: 0 0% 98%;
--card: 240 10% 3.9%;
--card-foreground: 0 0% 98%;
--popover: 240 10% 3.9%;
--popover-foreground: 0 0% 98%;
--primary: 0 0% 98%;
--primary-foreground: 240 5.9% 10%;
--secondary: 240 3.7% 15.9%;
--secondary-foreground: 0 0% 98%;
--muted: 240 3.7% 15.9%;
--muted-foreground: 240 5% 64.9%;
--accent: 240 3.7% 15.9%;
--accent-foreground: 0 0% 98%;
--destructive: 0 62.8% 30.6%;
--destructive-foreground: 0 0% 98%;
--border: 240 3.7% 15.9%;
--input: 240 3.7% 15.9%;
--ring: 240 4.9% 83.9%;
				}
			}
		</style>






<style type="text/tailwindcss">
    @layer base {
                    :root {
                        --background: transparent; /* Set background to transparent */
                        --foreground: 240 10% 3.9%;
                        --card: transparent; /* Set card background to transparent */
                        --card-foreground: 240 10% 3.9%;
                        --popover: transparent; /* Set popover background to transparent */
                        --popover-foreground: 240 10% 3.9%;
                        --primary: 240 5.9% 10%;
                        --primary-foreground: 0 0% 98%;
                        --secondary: 240 4.8% 95.9%;
                        --secondary-foreground: 240 5.9% 10%;
                        --muted: 240 4.8% 95.9%;
                        --muted-foreground: 240 3.8% 46.1%;
                        --accent: 240 4.8% 95.9%;
                        --accent-foreground: 240 5.9% 10%;
                        --destructive: 0 84.2% 60.2%;
                        --destructive-foreground: 0 0% 98%;
                        --border: 240 5.9% 90%;
                        --input: 240 5.9% 90%;
                        --ring: 240 5.9% 10%;
                        --radius: 0.5rem;
                    }
                    .dark {
                        --background: transparent; /* Set background to transparent for dark mode */
                        --foreground: 0 0% 98%;
                        --card: transparent; /* Set card background to transparent for dark mode */
                        --card-foreground: 0 0% 98%;
                        --popover: transparent; /* Set popover background to transparent for dark mode */
                        --popover-foreground: 0 0% 98%;
                        --primary: 0 0% 98%;
                        --primary-foreground: 240 5.9% 10%;
                        --secondary: 240 3.7% 15.9%;
                        --secondary-foreground: 0 0% 98%;
                        --muted: 240 3.7% 15.9%;
                        --muted-foreground: 240 5% 64.9%;
                        --accent: 240 3.7% 15.9%;
                        --accent-foreground: 0 0% 98%;
                        --destructive: 0 62.8% 30.6%;
                        --destructive-foreground: 0 0% 98%;
                        --border: 240 3.7% 15.9%;
                        --input: 240 3.7% 15.9%;
                        --ring: 240 4.9% 83.9%;
                    }
                }
            </style>


<div class="bg-accent text-accent-foreground p-8 border border-border rounded-lg max-w-md mx-auto">
    <p class="text-xl mb-4">
        <img aria-hidden="true" alt="chess-pawn" src="https://openui.fly.dev/openui/24x24.svg?text=♟️"
            class="inline-block mr-2" />
        अगर किसी भाई की एक लड़ी में दो सेम जोड़ी है तो एक ही जोड़ी के पैसे जोड़े जाएंगे और एक
        जोड़ी का भुगतान किया जाएगा।
    </p>
    <p class="text-xl mb-4">
        <img aria-hidden="true" alt="chess-pawn" src="https://openui.fly.dev/openui/24x24.svg?text=♟️"
            class="inline-block mr-2" />
        गेम okay होने पर ही गेम okay मानी जायेगी और भुगतान दिया जाएगा बिना गेम okay कोई भुगतान
        नहीं दिया जाएगा।
    </p>
    <p class="text-center text-xl font-semibold mt-8">
        S U M I भाई खाईवाल
    </p>
</div>



<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
<script src="https://unpkg.com/unlazy@0.11.3/dist/unlazy.with-hashing.iife.js" defer init></script>
<script type="text/javascript">
    window.tailwind.config = {
        darkMode: ['class'],
        theme: {
            extend: {
                colors: {
                    border: 'hsl(var(--border))',
                    input: 'hsl(var(--input))',
                    ring: 'hsl(var(--ring))',
                    background: 'hsl(var(--background))',
                    foreground: 'hsl(var(--foreground))',
                    primary: {
                        DEFAULT: 'hsl(var(--primary))',
                        foreground: 'hsl(var(--primary-foreground))'
                    },
                    secondary: {
                        DEFAULT: 'hsl(var(--secondary))',
                        foreground: 'hsl(var(--secondary-foreground))'
                    },
                    destructive: {
                        DEFAULT: 'hsl(var(--destructive))',
                        foreground: 'hsl(var(--destructive-foreground))'
                    },
                    muted: {
                        DEFAULT: 'hsl(var(--muted))',
                        foreground: 'hsl(var(--muted-foreground))'
                    },
                    accent: {
                        DEFAULT: 'hsl(var(--accent))',
                        foreground: 'hsl(var(--accent-foreground))'
                    },
                    popover: {
                        DEFAULT: 'hsl(var(--popover))',
                        foreground: 'hsl(var(--popover-foreground))'
                    },
                    card: {
                        DEFAULT: 'hsl(var(--card))',
                        foreground: 'hsl(var(--card-foreground))'
                    },
                },
            }
        }
    }
</script>
<style type="text/tailwindcss">
    @layer base {
				:root {
					--background: 0 0% 100%;
--foreground: 240 10% 3.9%;
--card: 0 0% 100%;
--card-foreground: 240 10% 3.9%;
--popover: 0 0% 100%;
--popover-foreground: 240 10% 3.9%;
--primary: 240 5.9% 10%;
--primary-foreground: 0 0% 98%;
--secondary: 240 4.8% 95.9%;
--secondary-foreground: 240 5.9% 10%;
--muted: 240 4.8% 95.9%;
--muted-foreground: 240 3.8% 46.1%;
--accent: 240 4.8% 95.9%;
--accent-foreground: 240 5.9% 10%;
--destructive: 0 84.2% 60.2%;
--destructive-foreground: 0 0% 98%;
--border: 240 5.9% 90%;
--input: 240 5.9% 90%;
--ring: 240 5.9% 10%;
--radius: 0.5rem;
				}
				.dark {
					--background: 240 10% 3.9%;
--foreground: 0 0% 98%;
--card: 240 10% 3.9%;
--card-foreground: 0 0% 98%;
--popover: 240 10% 3.9%;
--popover-foreground: 0 0% 98%;
--primary: 0 0% 98%;
--primary-foreground: 240 5.9% 10%;
--secondary: 240 3.7% 15.9%;
--secondary-foreground: 0 0% 98%;
--muted: 240 3.7% 15.9%;
--muted-foreground: 240 5% 64.9%;
--accent: 240 3.7% 15.9%;
--accent-foreground: 0 0% 98%;
--destructive: 0 62.8% 30.6%;
--destructive-foreground: 0 0% 98%;
--border: 240 3.7% 15.9%;
--input: 240 3.7% 15.9%;
--ring: 240 4.9% 83.9%;
				}
			}
		</style>



<div class="container mx-auto p-4">
    <h1 class="text-center text-2xl font-bold bg-primary text-primary-foreground py-2">JULY
        RESULT CHART 2024</h1>
    <div class="overflow-x-auto">
        <table class="min-w-full border-collapse border border-zinc-200">
            <thead>
                <tr class="bg-primary text-primary-foreground">
                    <th class="border border-zinc-200 px-4 py-2">Date</th>
                    <th class="border border-zinc-200 px-4 py-2">आजमगढ़</th>
                    <th class="border border-zinc-200 px-4 py-2">गोरखपुर</th>
                    <th class="border border-zinc-200 px-4 py-2">मथुरा</th>
                    <th class="border border-zinc-200 px-4 py-2">अयोध्या
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border border-zinc-200 px-4 py-2 bg-transparent-500 text-white">
                        2024-08-01</td>
                    <td class="border border-zinc-200 px-4 py-2">59</td>
                    <td class="border border-zinc-200 px-4 py-2">44</td>
                    <td class="border border-zinc-200 px-4 py-2">50</td>
                    <td class="border border-zinc-200 px-4 py-2">64</td>
                </tr>
                <tr>
                    <td class="border border-zinc-200 px-4 py-2 bg-transparent-500 text-white">
                        2024-08-02</td>
                    <td class="border border-zinc-200 px-4 py-2">05</td>
                    <td class="border border-zinc-200 px-4 py-2">77</td>
                    <td class="border border-zinc-200 px-4 py-2">22</td>
                    <td class="border border-zinc-200 px-4 py-2">87</td>
                </tr>
                <tr>
                    <td class="border border-zinc-200 px-4 py-2 bg-transparent-500 text-white">
                        2024-08-03</td>
                    <td class="border border-zinc-200 px-4 py-2">79</td>
                    <td class="border border-zinc-200 px-4 py-2">75</td>
                    <td class="border border-zinc-200 px-4 py-2">89</td>
                    <td class="border border-zinc-200 px-4 py-2">00</td>
                </tr>
                <tr>
                    <td class="border border-zinc-200 px-4 py-2 bg-transparent-500 text-white">
                        2024-08-04</td>
                    <td class="border border-zinc-200 px-4 py-2">20</td>
                    <td class="border border-zinc-200 px-4 py-2">86</td>
                    <td class="border border-zinc-200 px-4 py-2">30</td>
                    <td class="border border-zinc-200 px-4 py-2">81</td>
                </tr>
                <tr>
                    <td class="border border-zinc-200 px-4 py-2 bg-transparent-500 text-white">
                        2024-08-05</td>
                    <td class="border border-zinc-200 px-4 py-2">25</td>
                    <td class="border border-zinc-200 px-4 py-2">91</td>
                    <td class="border border-zinc-200 px-4 py-2">61</td>
                    <td class="border border-zinc-200 px-4 py-2">56</td>
                </tr>
                <tr>
                    <td class="border border-zinc-200 px-4 py-2 bg-transparent-500 text-white">
                        2024-08-06</td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                </tr>
                <tr>
                    <td class="border border-zinc-200 px-4 py-2 bg-transparent-500 text-white">
                        2024-08-07</td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                </tr>
                <tr>
                    <td class="border border-zinc-200 px-4 py-2 bg-transparent-500 text-white">
                        2024-08-08</td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                </tr>
                <tr>
                    <td class="border border-zinc-200 px-4 py-2 bg-transparent-500 text-white">
                        2024-08-09</td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                </tr>
                <tr>
                    <td class="border border-zinc-200 px-4 py-2 bg-transparent-500 text-white">
                        2024-08-10</td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                </tr>
                <tr>
                    <td class="border border-zinc-200 px-4 py-2 bg-transparent-500 text-white">
                        2024-08-11</td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                </tr>
                <tr>
                    <td class="border border-zinc-200 px-4 py-2 bg-transparent-500 text-white">
                        2024-08-12</td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                </tr>
                <tr>
                    <td class="border border-zinc-200 px-4 py-2 bg-transparent-500 text-white">
                        2024-08-13</td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                </tr>
                <tr>
                    <td class="border border-zinc-200 px-4 py-2 bg-transparent-500 text-white">
                        2024-08-14</td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                </tr>
                <tr>
                    <td class="border border-zinc-200 px-4 py-2 bg-transparent-500 text-white">
                        2024-08-15</td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                </tr>
                <tr>
                    <td class="border border-zinc-200 px-4 py-2 bg-transparent-500 text-white">
                        2024-08-16</td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                </tr>
                <tr>
                    <td class="border border-zinc-200 px-4 py-2 bg-transparent-500 text-white">
                        2024-08-17</td>
                    <td class="border border-zinc-200 px-4 py-2"></td>

                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                </tr>
                <tr>
                    <td class="border border-zinc-200 px-4 py-2 bg-transparent-500 text-white">
                        2024-08-18</td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                </tr>
                <tr>
                    <td class="border border-zinc-200 px-4 py-2 bg-transparent-500 text-white">
                        2024-08-19</td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                </tr>
                <tr>
                    <td class="border border-zinc-200 px-4 py-2 bg-transparent-500 text-white">
                        2024-08-20</td>
                    <td class="border border-zinc-200 px-4 py-2"></td>

                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                </tr>
                <tr>
                    <td class="border border-zinc-200 px-4 py-2 bg-transparent-500 text-white">
                        2024-08-21</td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                </tr>
                <tr>
                    <td class="border border-zinc-200 px-4 py-2 bg-transparent-500 text-white">
                        2024-08-22</td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                </tr>
                <tr>
                    <td class="border border-zinc-200 px-4 py-2 bg-transparent-500 text-white">
                        2024-08-23</td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                </tr>
                <tr>
                    <td class="border border-zinc-200 px-4 py-2 bg-transparent-500 text-white">
                        2024-08-24</td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                </tr>
                <tr>
                    <td class="border border-zinc-200 px-4 py-2 bg-transparent-500 text-white">
                        2024-08-25</td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                </tr>
                <tr>
                    <td class="border border-zinc-200 px-4 py-2 bg-transparent-500 text-white">
                        2024-08-26</td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                </tr>
                <tr>
                    <td class="border border-zinc-200 px-4 py-2 bg-transparent-500 text-white">
                        2024-08-27</td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                </tr>
                <tr>
                    <td class="border border-zinc-200 px-4 py-2 bg-transparent-500 text-white">
                        2024-08-28</td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                </tr>
                <tr>
                    <td class="border border-zinc-200 px-4 py-2 bg-transparent-500 text-white">
                        2024-08-29</td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                </tr>
                <tr>
                    <td class="border border-zinc-200 px-4 py-2 bg-transparent-500 text-white">
                        2024-08-30</td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                </tr>
                <!--                 <tr>
                    <td class="border border-zinc-200 px-4 py-2 bg-transparent-500 text-white">
                        2024-07-31</td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                    <td class="border border-zinc-200 px-4 py-2"></td>
                </tr> -->
            </tbody>
        </table>
    </div>



    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
    <script src="https://unpkg.com/unlazy@0.11.3/dist/unlazy.with-hashing.iife.js" defer init></script>
    <script type="text/javascript">
        window.tailwind.config = {
            darkMode: ['class'],
            theme: {
                extend: {
                    colors: {
                        border: 'hsl(var(--border))',
                        input: 'hsl(var(--input))',
                        ring: 'hsl(var(--ring))',
                        background: 'hsl(var(--background))',
                        foreground: 'hsl(var(--foreground))',
                        primary: {
                            DEFAULT: 'hsl(var(--primary))',
                            foreground: 'hsl(var(--primary-foreground))'
                        },
                        secondary: {
                            DEFAULT: 'hsl(var(--secondary))',
                            foreground: 'hsl(var(--secondary-foreground))'
                        },
                        destructive: {
                            DEFAULT: 'hsl(var(--destructive))',
                            foreground: 'hsl(var(--destructive-foreground))'
                        },
                        muted: {
                            DEFAULT: 'hsl(var(--muted))',
                            foreground: 'hsl(var(--muted-foreground))'
                        },
                        accent: {
                            DEFAULT: 'hsl(var(--accent))',
                            foreground: 'hsl(var(--accent-foreground))'
                        },
                        popover: {
                            DEFAULT: 'hsl(var(--popover))',
                            foreground: 'hsl(var(--popover-foreground))'
                        },
                        card: {
                            DEFAULT: 'hsl(var(--card))',
                            foreground: 'hsl(var(--card-foreground))'
                        },
                    },
                }
            }
        }
    </script>
    <style type="text/tailwindcss">
        @layer base {
                        :root {
                            --background: transparent;
                            --foreground: transparent;
                            --card: transparent;
                            --card-foreground: transparent;
                            --popover: transparent;
                            --popover-foreground: transparent;
                            --primary: transparent;
                            --primary-foreground: transparent;
                            --secondary: transparent;
                            --secondary-foreground: transparent;
                            --muted: transparent;
                            --muted-foreground: transparent;
                            --accent: transparent;
                            --accent-foreground: transparent;
                            --destructive: transparent;
                            --destructive-foreground: transparent;
                            --border: transparent;
                            --input: transparent;
                            --ring: transparent;
                            --radius: 0.5rem;
                        }
                        .dark {
                            --background: transparent;
                            --foreground: transparent;
                            --card: transparent;
                            --card-foreground: transparent;
                            --popover: transparent;
                            --popover-foreground: transparent;
                            --primary: transparent;
                            --primary-foreground: transparent;
                            --secondary: transparent;
                            --secondary-foreground: transparent;
                            --muted: transparent;
                            --muted-foreground: transparent;
                            --accent: transparent;
                            --accent-foreground: transparent;
                            --destructive: transparent;
                            --destructive-foreground: transparent;
                            --border: transparent;
                            --input: transparent;
                            --ring: transparent;
                        }
                    }
                </style>


    <!--     <div class="bg-transparent-500 text-center py-4">
        <h1 class="text-2xl font-bold text-black">SATTA CHART</h1>
    </div>
    <div class="overflow-x-auto">
        <table class="min-w-full border-collapse border border-zinc-300">
            <thead>
                <tr>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="bg-transparent-500 text-white border border-zinc-300 px-4 py-2">सदर बाजार</td>
                    <td class="border border-zinc-300 px-4 py-2"><a href="sadar.html">2024</a></td>
                </tr>
                <tr>
                    <td class="bg-transparent-500 text-white border border-zinc-300 px-4 py-2">ग्वालियर</td>
                    <td class="border border-zinc-300 px-4 py-2"><a href="gwaliar.html">2024</a></td>
                </tr>
                <tr>
                    <td class="bg-transparent-500 text-white border border-zinc-300 px-4 py-2">श्री गणेश</td>
                    <td class="border border-zinc-300 px-4 py-2"><a href="ganesh.html">2024</a></td>
                </tr>
                <tr>
                    <td class="bg-transparent-500 text-white border border-zinc-300 px-4 py-2">फरीदाबाद</td>
                    <td class="border border-zinc-300 px-4 py-2"><a href="feridabda.html">2024</a></td>
                </tr>
                <tr>
                    <td class="bg-transparent-500 text-white border border-zinc-300 px-4 py-2">गाज़ियाबाद</td>
                    <td class="border border-zinc-300 px-4 py-2"><a href="gaziabad.html">2024</a></td>
                </tr>
                <tr>
                    <td class="bg-transparent-500 text-white border border-zinc-300 px-4 py-2">गली</td>
                    <td class="border border-zinc-300 px-4 py-2"><a href="gali.html">2024</a></td>
                </tr>
                <tr>
                    <td class="bg-transparent-500 text-white border border-zinc-300 px-4 py-2">दिसावर</td>
                    <td class="border border-zinc-300 px-4 py-2"><a href="dishawar.html">2024</a></td>
                </tr>
                <tr>
                    <td class="bg-transparent-500 text-white border border-zinc-300 px-4 py-2">अयोध्या</td>
                    <td class="border border-zinc-300 px-4 py-2"><a href="ayodhya.html">2024</a></td>
                </tr>
                <tr>
                    <td class="bg-transparent-500 text-white border border-zinc-300 px-4 py-2">ऐलनाबाद</td>
                    <td class="border border-zinc-300 px-4 py-2"><a href="elanbad.html">2024</a></td>
                </tr>
                <tr>
                    <td class="bg-transparent-500 text-white border border-zinc-300 px-4 py-2">दिल्लीबाजार</td>
                    <td class="border border-zinc-300 px-4 py-2"><a href="delhibazar.html">2024</a></td>
                </tr>
                <tr>
                    <td class="bg-transparent-500 text-white border border-zinc-300 px-4 py-2">कानपुर सिटी</td>
                    <td class="border border-zinc-300 px-4 py-2"><a href="kanpur.html">2024</a></td>
                </tr>
                <tr>
                    <td class="bg-transparent-500 text-white border border-zinc-300 px-4 py-2">आजमगढ़
                    </td>
                    <td class="border border-zinc-300 px-4 py-2"><a href="kanpur.html">2024</a></td>
                </tr>
                <tr>
                    <td class="bg-transparent-500 text-white border border-zinc-300 px-4 py-2">गोरखपुर
                    </td>
                    <td class="border border-zinc-300 px-4 py-2"><a href="kanpur.html">2024</a></td>
                </tr>
                <tr>
                    <td class="bg-transparent-500 text-white border border-zinc-300 px-4 py-2">रायपुर
                    </td>
                    <td class="border border-zinc-300 px-4 py-2"><a href="kanpur.html">2024</a></td>
                </tr>
            </tbody>
        </table>
    </div> -->
    <div class="bg-black text-white text-center py-4">
        <p>साइट बनवाने के लिए कनेक्ट करें : <a href="#" class="text-blue-500 underline">Click Here</a>
        </p>
    </div>
    <div class="bg-blue-500 text-center py-4">
        <a href="#" class="text-black mx-2">Privacy Policy</a>
        <a href="#" class="text-black mx-2">Terms & Conditions</a>
        <p class="text-black mt-2">@ 2023 A1Sattaking All Rights Reserved</p>
    </div>
    <div class="modal fade" id="infoModal" tabindex="-1" role="dialog" aria-labelledby="infoModalLabel"
        aria-hidden="true">
        <div class="modal fade" id="infoModal" tabindex="-1" role="dialog" aria-labelledby="infoModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="infoModalLabel">Row Information</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="info-box-inner" id="infoBox"></div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>


        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
        <script>
            $(document).ready(function () {
                $('table tbody tr').click(function () {
                    var cells = $(this).children('td');
                    var rowData = [];
                    cells.each(function () {
                        rowData.push($(this).text());
                    });
                    var infoBox = $('#infoBox');
                    infoBox.html(`
                                <div>
                                    <strong>Place:</strong> ${rowData[0]}<br>
                                    <strong>2024:</strong> ${rowData[1]}<br>
                                    <strong>2023:</strong> ${rowData[2]}<br>
                                    <strong>2022:</strong> ${rowData[3]}
                                </div>
                            `);
                    infoBox.removeClass('rotate');  // Reset the rotation
                    setTimeout(function () {
                        infoBox.addClass('rotate');  // Trigger the rotation
                    }, 10);  // Slight delay to allow reflow

                    $('#infoModal').modal('show'); // Show modal
                });
            });
        </script>
        </body>


    </div>

    </nav>
    </body>
    <script src="https://smtpjs.com/v3/smtp.js"></script>
    <script>
        document.addEventListener('contextmenu', event => event.preventDefault());
        document.addEventListener('keydown', event => {
            if (event.key == 'F12' || (event.ctrlKey && event.shiftKey && event.key == 'I')) {
                event.preventDefault();
            }
        });
    </script>


</html>
