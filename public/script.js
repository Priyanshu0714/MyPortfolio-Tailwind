document.addEventListener("DOMContentLoaded", () => {
    // 1. Role Typewriter Effect
    const roles = [
        "Systems & Backend Developer",
        "Autonomous Navigation & CV Intern",
        "Distributed Pipelines in Go",
        "Competitive Programmer (1431 Specialist)",
        "Final-Year CSE @ Chandigarh University"
    ];

    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    const typewriterEl = document.getElementById("roleTypewriter");

    function typeRole() {
        if (!typewriterEl) return;
        const currentRole = roles[roleIdx];

        if (isDeleting) {
            typewriterEl.textContent = currentRole.substring(0, charIdx - 1);
            charIdx--;
        } else {
            typewriterEl.textContent = currentRole.substring(0, charIdx + 1);
            charIdx++;
        }

        let speed = isDeleting ? 40 : 80;

        if (!isDeleting && charIdx === currentRole.length) {
            speed = 2200; // Pause at full word
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            roleIdx = (roleIdx + 1) % roles.length;
            speed = 400; // Pause before starting next word
        }

        setTimeout(typeRole, speed);
    }
    typeRole();

    // 2. Project Archive & Filtering
    const filterTabs = document.querySelectorAll(".filter-tab");
    const projectCards = document.querySelectorAll(".project-card");
    const toggleArchiveBtn = document.getElementById("toggleArchiveBtn");
    const toggleArchiveText = document.getElementById("toggleArchiveText");
    const toggleArchiveIcon = document.getElementById("toggleArchiveIcon");

    let isArchiveExpanded = false;
    let currentCategory = "all";

    function updateProjectVisibility() {
        projectCards.forEach((card) => {
            const cardCategory = card.getAttribute("data-category");
            const index = parseInt(card.getAttribute("data-index"), 10);
            const matchesCategory = (currentCategory === "all" || cardCategory === currentCategory);

            if (!matchesCategory) {
                card.classList.add("hidden");
            } else {
                if (isArchiveExpanded || currentCategory !== "all" || index < 6) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            }
        });

        // Toggle button visibility based on filter
        if (currentCategory !== "all") {
            if (toggleArchiveBtn) toggleArchiveBtn.parentElement.classList.add("hidden");
        } else {
            if (toggleArchiveBtn) {
                toggleArchiveBtn.parentElement.classList.remove("hidden");
                if (toggleArchiveText) {
                    toggleArchiveText.textContent = isArchiveExpanded 
                        ? "Show Top Projects" 
                        : `Show All Projects (${projectCards.length})`;
                }
                if (toggleArchiveIcon) {
                    toggleArchiveIcon.style.transform = isArchiveExpanded ? "rotate(180deg)" : "rotate(0deg)";
                }
            }
        }
    }

    filterTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            filterTabs.forEach(t => {
                t.classList.remove("text-white", "bg-black", "font-semibold", "border", "border-black");
                t.classList.add("text-neutral-700", "font-medium");
            });
            tab.classList.add("text-white", "bg-black", "font-semibold", "border", "border-black");
            tab.classList.remove("text-neutral-700", "font-medium");

            currentCategory = tab.getAttribute("data-category");
            updateProjectVisibility();
        });
    });

    if (toggleArchiveBtn) {
        toggleArchiveBtn.addEventListener("click", () => {
            isArchiveExpanded = !isArchiveExpanded;
            updateProjectVisibility();
        });
    }

    // 3. Mobile Navigation Drawer
    const mobileMenuToggle = document.getElementById("mobileMenuToggle");
    const mobileDrawer = document.getElementById("mobileDrawer");
    const hamburgerIcon = document.getElementById("hamburgerIcon");
    const closeIcon = document.getElementById("closeIcon");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

    function toggleMobileMenu() {
        if (!mobileDrawer) return;
        const isHidden = mobileDrawer.classList.contains("hidden");
        if (isHidden) {
            mobileDrawer.classList.remove("hidden");
            hamburgerIcon?.classList.add("hidden");
            closeIcon?.classList.remove("hidden");
        } else {
            mobileDrawer.classList.add("hidden");
            hamburgerIcon?.classList.remove("hidden");
            closeIcon?.classList.add("hidden");
        }
    }

    mobileMenuToggle?.addEventListener("click", toggleMobileMenu);
    mobileNavLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileDrawer?.classList.add("hidden");
            hamburgerIcon?.classList.remove("hidden");
            closeIcon?.classList.add("hidden");
        });
    });

    // 4. Resume Modal Handler
    const resumeModal = document.getElementById("resumeModal");
    const openModalBtns = [
        document.getElementById("resumeModalBtn"),
        document.getElementById("heroResumeBtn"),
        document.getElementById("mobileResumeBtn")
    ];
    const closeModalBtn = document.getElementById("closeResumeModalBtn");

    function openResumeModal() {
        if (!resumeModal) return;
        resumeModal.classList.remove("hidden");
        resumeModal.classList.add("flex");
        document.body.style.overflow = "hidden";
    }

    function closeResumeModal() {
        if (!resumeModal) return;
        resumeModal.classList.add("hidden");
        resumeModal.classList.remove("flex");
        document.body.style.overflow = "";
    }

    openModalBtns.forEach(btn => btn?.addEventListener("click", openResumeModal));
    closeModalBtn?.addEventListener("click", closeResumeModal);

    resumeModal?.addEventListener("click", (e) => {
        if (e.target === resumeModal) closeResumeModal();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && resumeModal && !resumeModal.classList.contains("hidden")) {
            closeResumeModal();
        }
    });

    // 5. One-Click Email Copying
    const copyEmailBtn = document.getElementById("copyEmailBtn");
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener("click", async () => {
            const email = "choudhary.priyanshu1401@gmail.com";
            try {
                await navigator.clipboard.writeText(email);
                const originalText = copyEmailBtn.textContent;
                copyEmailBtn.textContent = "Copied! ✓";
                copyEmailBtn.classList.add("text-white", "bg-black");
                setTimeout(() => {
                    copyEmailBtn.textContent = originalText;
                    copyEmailBtn.classList.remove("text-white", "bg-black");
                }, 2000);
            } catch (err) {
                console.error("Failed to copy email:", err);
            }
        });
    }

    // 6. Interactive Contact Form with MongoDB Persistence
    const contactForm = document.getElementById("contactForm");
    const formSubmitBtn = document.getElementById("formSubmitBtn");
    const submitBtnText = document.getElementById("submitBtnText");
    const formSuccessAlert = document.getElementById("formSuccessAlert");
    const formErrorAlert = document.getElementById("formErrorAlert");
    const errorMessageText = document.getElementById("errorMessageText");

    // Check if redirected with ?sent=true
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("sent") === "true") {
        formSuccessAlert?.classList.remove("hidden");
    }

    if (contactForm) {
        contactForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            
            formSuccessAlert?.classList.add("hidden");
            formErrorAlert?.classList.add("hidden");

            const formData = new FormData(contactForm);
            const payload = {
                name: formData.get("name"),
                email: formData.get("email"),
                message: formData.get("message")
            };

            if (formSubmitBtn) {
                formSubmitBtn.disabled = true;
                if (submitBtnText) submitBtnText.textContent = "Sending...";
            }

            try {
                const response = await fetch("/GetInTouch", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(payload)
                });

                const result = await response.json();

                if (response.ok && result.success) {
                    formSuccessAlert?.classList.remove("hidden");
                    contactForm.reset();
                } else {
                    if (errorMessageText) {
                        errorMessageText.textContent = result.error || "Failed to send message. Please try again.";
                    }
                    formErrorAlert?.classList.remove("hidden");
                }
            } catch (err) {
                console.error("Contact submission error:", err);
                // Fallback: submit standard form if fetch is blocked
                contactForm.submit();
                return;
            } finally {
                if (formSubmitBtn) {
                    formSubmitBtn.disabled = false;
                    if (submitBtnText) submitBtnText.textContent = "Send Message";
                }
            }
        });
    }
});
