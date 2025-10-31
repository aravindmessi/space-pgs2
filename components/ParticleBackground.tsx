
import React, { useRef, useEffect } from 'react';

const ParticleBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;

            constructor(x: number, y: number, vx: number, vy: number, radius: number) {
                this.x = x;
                this.y = y;
                this.vx = vx;
                this.vy = vy;
                this.radius = radius;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
                // Using theme colors: purple/indigo for a soft glow
                gradient.addColorStop(0, 'rgba(142, 45, 226, 0.3)');
                gradient.addColorStop(0.5, 'rgba(142, 45, 226, 0.1)');
                gradient.addColorStop(1, 'rgba(74, 0, 224, 0)');
                ctx.fillStyle = gradient;
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
                    this.vx *= -1;
                }
                if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
                    this.vy *= -1;
                }
            }
        }

        const init = () => {
            resizeCanvas();
            particles = [];
            // Density of particles depends on screen size for responsiveness
            const numberOfParticles = (canvas.width * canvas.height) / 22000;
            for (let i = 0; i < numberOfParticles; i++) {
                const radius = Math.random() * 25 + 15; // Glow radius
                const x = Math.random() * (canvas.width - radius * 2) + radius;
                const y = Math.random() * (canvas.height - radius * 2) + radius;
                const vx = (Math.random() - 0.5) * 0.3; // Slow floating speed
                const vy = (Math.random() - 0.5) * 0.3;
                particles.push(new Particle(x, y, vx, vy, radius));
            }
        };

        const connect = () => {
            if (!ctx) return;
            const connectDistance = 150;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a + 1; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectDistance) {
                        const opacity = 1 - (distance / connectDistance);
                        ctx.strokeStyle = `rgba(142, 45, 226, ${opacity * 0.4})`; // Faint connecting lines
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };
        
        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            connect();
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        window.addEventListener('resize', init);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', init);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed inset-0 z-0" />;
};

export default ParticleBackground;
