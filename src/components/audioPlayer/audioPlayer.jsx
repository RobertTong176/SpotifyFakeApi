import React, { useEffect, useRef, useState } from "react";
import ProgressCircle from "./progressCircle";
import WaveAnimation from "./waveAnimation";
import formatDuration from "../../utils/helper";
import classNames from "classnames/bind";
import styles from "./audioPlayer.module.scss";
import Controls from "./controls";

const cx = classNames.bind(styles);
export default function AudioPlayer({
  currentTrack,
  currentIndex,
  setCurrentIndex,
  total,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);

  // hàm xử lý khi chuyển bài tiếp theo
  const handleNext = () => {
    if (currentIndex < total.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };
  // hàm xử lý khi quay lại bài trước đó
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(total.length - 1);
    }
  };
  // lấy full bài
  var audioSrc = total[currentIndex]?.track.full_url || total[currentIndex]?.track.preview_url;
  // Tạo ref audio để lưu trữ audio hiện tại
  const audioRef = useRef(new Audio(total[0]?.track.full_url));
  // Tạo ref để lưu trữ interval theo dõi tiến trình của bài hát
  const intervalRef = useRef();
  // Kiểm tra xem audio đã sẵn sàng để phát hay chưa
  const isReady = useRef(false);
  // Lấy độ dài của audio
  const [duration,setDuration] = useState(0);
  // Tính toán phần trăm thời lượng đã phát của bài hát
  const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

  // Hàm bắt đầu interval cập nhật tiến trình của bài hát
  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      // Nếu audio kết thúc, chuyển sang bài tiếp theo
      if (audioRef.current.ended) {
        handleNext();
      } else {
        // Cập nhật thời gian hiện tại của audio
        setTrackProgress(audioRef.current.currentTime);
      }
    },1000);
  };

  // lắng nghe trạng thái isPlaying
  useEffect(() => {
    if(audioRef.current.src){
      if (isPlaying) {
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    }else{
      if(isPlaying){
        audioRef.current=new Audio(audioSrc)
        audioRef.current.play()
        startTimer()
      }else{
         clearInterval(intervalRef.current);
         audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);
    setTrackProgress(0)
    // setTrackProgress(audioRef.current.currentTime);
    audioRef.current.onloadedmetadata=()=>{
      setDuration(audioRef.current.duration)
    }
    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [currentIndex]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const artists = [];
  currentTrack?.album?.artists.forEach((element) => {
    artists.push(element?.name);
  });

  const addZero = (n)=>{
   return n > 9 ? "" + n : "0" + n
  }

  return (
    <div className={cx("player-body")}>
      <div className={cx("player-left-body")}>
        <ProgressCircle
          percentage={currentPercentage}
          isPlaying={true}
          image={currentTrack?.album?.images[0].url}
          size={300}
          color="#c98850"
        />
      </div>
      <div className={cx("player-right-body")}>
        <p className={cx("title-song")}>{currentTrack?.name}</p>
        <p className={cx("artists-name")}>{artists.join(" - ")}</p>
        <div className={cx("player-right-bottom")}>
          <div className={cx("song-duration")}>
            <p className={cx("duration")}>0:{addZero(Math.round(trackProgress))}</p>
            <WaveAnimation isPlaying={isPlaying} />
            <p className={cx("duration")}>0:30</p>
          </div>
          <Controls
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            handleNext={handleNext}
            handlePrev={handlePrev}
            total={total}
          />
        </div>
      </div>
    </div>
  );
}
