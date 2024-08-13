import React, { useEffect, useRef, useState } from "react";
import "../HomeComponents/ReviewSection.css";

function ReviewSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const slideCount = 8; // Total number of slides

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, 3000); // Slide transition time in milliseconds

    return () => clearInterval(interval);
  }, [slideCount]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${(100 / slideCount) * activeIndex}%)`;
    }
  }, [activeIndex, slideCount]);

  return (
    <div>
      <h6>Review Section</h6>
      <section className="rs-container">
        <div className="rs-inner">
          <h2 className="rs-title">Clients Reviews</h2>
          <p className="rs-subtitle">What our clients say about us</p>
          <div className="rs-content">
            <div className="rs-slider" ref={sliderRef}>
              {/* Slide 1 */}
              <div className="rs-slide">
                <div className="rs-review">
                  <div className="rs-review-img">
                    <img src="../src/Images/hariface2.jpeg" alt="client" />
                  </div>
                  <div className="rs-review-txt">
                    <h3 className="rs-review-name">Hariharan Senthilkumar</h3>
                    <p className="rs-review-comment">
                      Hello, I am Hariharaan from SRM University KTR campus,
                      Chennai. I am currently working as a Software trainee at
                      Mindgate Solutions in Chennai.
                    </p>
                  </div>
                </div>
              </div>
              {/* Slide 2 */}
              <div className="rs-slide">
                <div className="rs-review">
                  <div className="rs-review-img">
                    <img
                      src="/src/images/TeamMembers/1723491210186.jpg"
                      alt="client"
                    />
                  </div>
                  <div className="rs-review-txt">
                    <h3 className="rs-review-name">Meganathan C</h3>
                    <p className="rs-review-comment">
                      Hello, I am from Anna University BIT campus, Trichy. I am
                      currently working as a Software Trainee at Mindgate
                      Solutions in Chennai.
                    </p>
                  </div>
                </div>
              </div>
              {/* Slide 3 */}
              <div className="rs-slide">
                <div className="rs-review">
                  <div className="rs-review-img">
                    <img
                      src="/src/images/TeamMembers/thaha.jpeg"
                      alt="client"
                    />
                  </div>
                  <div className="rs-review-txt">
                    <h3 className="rs-review-name">Mohammed Thaha U</h3>
                    <p className="rs-review-comment">
                      Hi, I am Thaha from Anna University BIT campus, a member
                      of the 2024 pass out batch. An aspiring developer who
                      wants to learn more.
                    </p>
                  </div>
                </div>
              </div>
              {/* Slide 4 */}
              <div className="rs-slide">
                <div className="rs-review">
                  <div className="rs-review-img">
                    <img
                      src="/src/images/TeamMembers/kannan.jpg"
                      alt="client"
                    />
                  </div>
                  <div className="rs-review-txt">
                    <h3 className="rs-review-name">Moris Kannan B</h3>
                    <p className="rs-review-comment">
                      I am from Anna University BIT campus, a member of the 2024
                      pass out batch. An aspiring developer who wants to learn
                      more.
                    </p>
                  </div>
                </div>
              </div>
              {/* Slide 5 */}
              <div className="rs-slide">
                <div className="rs-review">
                  <div className="rs-review-img">
                    <img src="/src/images/TeamMembers/Navin.jpg" alt="client" />
                  </div>
                  <div className="rs-review-txt">
                    <h3 className="rs-review-name">Navin Balasubramani V</h3>
                    <p className="rs-review-comment">
                      I'm Navin Balasubramani from Anna University BIT campus, a
                      member of the 2024 pass out batch. An aspiring developer
                      who wants to learn more.
                    </p>
                  </div>
                </div>
              </div>
              {/* Duplicate slides for seamless effect */}
              <div className="rs-slide">
                <div className="rs-review">
                  <div className="rs-review-img">
                    <img src="../src/Images/hariface2.jpeg" alt="client" />
                  </div>
                  <div className="rs-review-txt">
                    <h3 className="rs-review-name">Hariharan Senthilkumar</h3>
                    <p className="rs-review-comment">
                      I'm Harihaaran from SRM University KTR campus, a member of
                      the 2024 pass out batch. An aspiring developer who wants
                      to learn more.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rs-slide">
                <div className="rs-review">
                  <div className="rs-review-img">
                    <img
                      src="/src/images/TeamMembers/1723491210186.jpg"
                      alt="client"
                    />
                  </div>
                  <div className="rs-review-txt">
                    <h3 className="rs-review-name">Meganathan C</h3>
                    <p className="rs-review-comment">
                      Hello, I am from Anna University BIT campus, Trichy. I am
                      currently working as a Software Trainee at Mindgate
                      Solutions in Chennai.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rs-slide">
                <div className="rs-review">
                  <div className="rs-review-img">
                    <img
                      src="/src/images/TeamMembers/thaha.jpeg"
                      alt="client"
                    />
                  </div>
                  <div className="rs-review-txt">
                    <h3 className="rs-review-name">Mohammed Thaha U</h3>
                    <p className="rs-review-comment">
                      I am from Anna University BIT campus, a member of the 2024
                      pass out batch. An aspiring developer who wants to learn
                      more.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rs-slide">
                <div className="rs-review">
                  <div className="rs-review-img">
                    <img
                      src="/src/images/TeamMembers/kannan.jpg"
                      alt="client"
                    />
                  </div>
                  <div className="rs-review-txt">
                    <h3 className="rs-review-name">Moris Kannan B</h3>
                    <p className="rs-review-comment">
                      I am from Anna University BIT campus, a member of the 2024
                      pass out batch. An aspiring developer who wants to learn
                      more.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rs-slide">
                <div className="rs-review">
                  <div className="rs-review-img">
                    <img src="/src/images/TeamMembers/Navin.jpg" alt="client" />
                  </div>
                  <div className="rs-review-txt">
                    <h3 className="rs-review-name">Navin Balasubramani V</h3>
                    <p className="rs-review-comment">
                      I'm Navin Balasubramani from Anna University BIT campus, a
                      member of the 2024 pass out batch. An aspiring developer
                      who wants to learn more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReviewSection;
