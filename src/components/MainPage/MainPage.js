import React, { useRef, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { FcAbout, FcStatistics, FcServices } from "react-icons/fc";

const options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new window.kakao.maps.LatLng(35.75360626185865, 129.3246331340595), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};

function MainPage() {
  const container = useRef(null);
  useEffect(() => {
    let map = new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴

    let markerPosition = new window.kakao.maps.LatLng(
      35.75360626185865,
      129.3246331340595
    );
    let marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
    return () => {};
  }, []);

  return (
    <>
      <div style={{ zIndex: 1, transform: "translate(0, -100px)" }}>
        <Carousel varient="dark" fade interval={4000}>
          <Carousel.Item>
            <img
              className="w-100"
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="w-100"
              src="https://images.unsplash.com/photo-1630343710506-89f8b9f21d31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="w-100"
              src="https://images.unsplash.com/photo-1630329800719-58e1f63c73ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=805"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="max-w-5xl mx-auto flex flex-col text-center mb-20">
        <h1>
          <span className="text-red-400">상속세</span>를{" "}
          <span className="text-red-400">빠르고 정확하게</span> 해결하는 방법
        </h1>
        <h3 className="font-light text-xl">상속세전문 종만세무</h3>
        <div className="flex justify-between mt-12">
          <div className="flex flex-col px-24 border-l-2 border-r-2">
            <FcAbout className=" text-9xl" />
            <h2 className="text-xl mt-4">세무 세무 종만법인</h2>
          </div>
          <div className="flex flex-col">
            <FcStatistics className=" text-9xl" />
            <h2 className="text-xl mt-4">세무 세무 종만법인</h2>
          </div>
          <div className="flex flex-col  px-24 border-l-2 border-r-2">
            <FcServices className=" text-9xl" />
            <h2 className="text-xl mt-4">세무 세무 종만법인</h2>
          </div>
        </div>
        <h2 className="mt-20 text-2xl text-blue-400">
          최고의 상속세 신고를 알아보세요 &rarr;
        </h2>
      </div>

      <div
        className="py-20"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80')",
        }}
      >
        <div className="max-w-5xl mx-auto flex flex-col text-center mb-10">
          <div className="grid grid-cols-2 gap-12">
            <div className="w-full">
              <div>
                <div className="flex justify-between">
                  <h4>세무회계뉴스</h4>
                  <span className="text-3xl mb-2">+</span>
                </div>
                <span className="flex justify-between">
                  <h5 className="text-lg font-light">
                    자영업자가 꼭 실천해야 할 절세 전략
                  </h5>
                  <h6 className="text-lg font-light">2021-08-01</h6>
                </span>
                <span className="flex justify-between">
                  <h5 className="text-lg font-light">
                    자영업자가 꼭 실천해야 할 절세 전략
                  </h5>
                  <h6 className="text-lg font-light">2021-08-01</h6>
                </span>
                <span className="flex justify-between">
                  <h5 className="text-lg font-light">
                    자영업자가 꼭 실천해야 할 절세 전략
                  </h5>
                  <h6 className="text-lg font-light">2021-08-01</h6>
                </span>
              </div>
            </div>
            <div className="w-full">
              <div>
                <div className="flex justify-between">
                  <h4>세무회계뉴스</h4>
                  <span className="text-3xl mb-2">+</span>
                </div>
                <span className="flex justify-between">
                  <h5 className="text-lg font-light">
                    자영업자가 꼭 실천해야 할 절세 전략
                  </h5>
                  <h6 className="text-lg font-light">2021-08-01</h6>
                </span>
                <span className="flex justify-between">
                  <h5 className="text-lg font-light">
                    자영업자가 꼭 실천해야 할 절세 전략
                  </h5>
                  <h6 className="text-lg font-light">2021-08-01</h6>
                </span>
                <span className="flex justify-between">
                  <h5 className="text-lg font-light">
                    자영업자가 꼭 실천해야 할 절세 전략
                  </h5>
                  <h6 className="text-lg font-light">2021-08-01</h6>
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white py-10 mt-10">
            <span className="flex ml-4 font-medium text-xl mb-4 mx-4">
              상담신청하기
            </span>
            <form className="flex flex-col">
              <input
                className="border p-2 mx-4 mb-2"
                type="text"
                placeholder="이름"
              />
              <input
                className="border p-2 mx-4 mb-2"
                type="text"
                placeholder="전화번호"
              />
              <input
                className="border p-2 mx-4 mb-2"
                type="text"
                placeholder="이메일"
              />
              <textarea
                className="border p-2 mx-4 mb-2"
                rows="6"
                placeholder="문의하기"
              ></textarea>
              <div className="flex justify-end">
                <input
                  type="submit"
                  className="py-2 w-28 mx-4 bg-blue-400 text-white rounded"
                  value="전송하기"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <img src="images/profile.jpg" alt="profile" />
      </div>
      <div className="max-w-5xl mx-auto my-20 flex flex-col">
        <div>
          <h2 className="font-medium border-b-2 pb-2">오시는길</h2>
          <h3 className="text-2xl mt-2">
            서울시 서초구 서초중앙로2길 42, 202호(서초동, 갑목빌딩)
          </h3>
          <h4 className="text-xl font-light mb-4">남부터미널역 3번 출구</h4>
        </div>
        <div
          className="map"
          ref={container}
          style={{ width: "100%", height: "500px" }}
        ></div>
      </div>
    </>
  );
}

export default MainPage;
