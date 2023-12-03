<template>
    <div class="typing-container">
        <div id="text-output">{{ currentText }}</div>
    </div>
</template>
  
<script>
export default {
    props: ['texts'],

    data() {
        return {
            currentTextIndex: 0,
            currentCharIndex: 0,
            isDeleting: false,
        };
    },
    computed: {
        currentText() {
            return this.texts[this.currentTextIndex].substring(0, this.currentCharIndex);
        },
    },
    mounted() {
        this.typeText();
    },
    methods: {
        typeText() {
            const text = this.texts[this.currentTextIndex];

            if (!this.isDeleting && this.currentCharIndex <= text.length) {
                this.currentCharIndex++;
            } else if (this.isDeleting && this.currentCharIndex >= 0) {
                this.currentCharIndex--;
            }

            if (this.isDeleting && this.currentCharIndex === -1) {
                // Switch to the next text after deleting the current one
                this.isDeleting = false;
                this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
            }

            // If finished typing current text, start deleting
            if (!this.isDeleting && this.currentCharIndex === text.length) {
                this.isDeleting = true;
            }

            // If finished deleting all texts, start typing the first text again
            if (this.isDeleting && this.currentTextIndex === this.texts.length) {
                this.isDeleting = false;
                this.currentTextIndex = 0;
            }

            const typingSpeed = this.isDeleting ? 50 : 150;
            setTimeout(() => this.typeText(), typingSpeed);
        },
    },
};
</script>
  
<style scoped>
/* Cursor blink animation */
@keyframes blink {
    50% {
        border-color: transparent;
    }
}

#text-output::after {
    content: '|';
    display: inline-block;
    animation: blink 0.7s infinite;
}
</style>
  
