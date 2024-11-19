document.addEventListener('DOMContentLoaded', () => {
    const roleIcons = document.querySelectorAll('.role-icon');
    const roleContents = document.querySelectorAll('.role-content');

    roleIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            // 활성화된 아이콘 변경
            document.querySelector('.role-icon.active').classList.remove('active');
            icon.classList.add('active');

            // 컨텐츠 전환
            const role = icon.getAttribute('data-role');
            const targetContent = document.getElementById(role);

            // 현재 활성화된 컨텐츠 페이드아웃
            const activeContent = document.querySelector('.role-content.active');
            activeContent.style.opacity = '0';
            activeContent.style.transform = 'translateX(-20px)';

            setTimeout(() => {
                activeContent.classList.remove('active');
                targetContent.classList.add('active');
                
                // 새로운 컨텐츠 페이드인
                setTimeout(() => {
                    targetContent.style.opacity = '1';
                    targetContent.style.transform = 'translateX(0)';
                }, 50);
            }, 300);
        });
    });
    
    // 맵 슬라이더 코드 추가
    const slides = document.querySelectorAll('.map-slide');
    const prevButton = document.querySelector('.map-prev');
    const nextButton = document.querySelector('.map-next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => {
            slide.classList.remove('active');
            slide.style.opacity = '0';
        });
        
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        }

        slides[currentSlide].classList.add('active');
        setTimeout(() => {
            slides[currentSlide].style.opacity = '1';
        }, 50);
    }

    if (prevButton && nextButton) {  // 버튼이 존재하는지 확인
        nextButton.addEventListener('click', () => {
            currentSlide++;
            showSlide(currentSlide);
        });

        prevButton.addEventListener('click', () => {
            currentSlide--;
            showSlide(currentSlide);
        });
    }

    // 초기 슬라이드 표시
    showSlide(currentSlide);
    
        // 비디오 버튼 클릭 이벤트 추가
        const videoButton = document.querySelector('.video-button');
        if (videoButton) {
            videoButton.addEventListener('click', () => {
                window.open('https://youtu.be/TLpi3FUGFGA?feature=shared', '_blank');
            });
        }
});