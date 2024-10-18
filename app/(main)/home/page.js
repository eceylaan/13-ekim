import PostList from "@/components/main/postList";

export default async function home() {
  return (
    <div>
      <div className="userMainPageFlex">
        <div>
          <nav className="userMainPageNav">
            <button
              style={{
                border: "none",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                cursor: "pointer",
              }}
            >
              {" "}
              {"<"}
            </button>
            <p>+</p>
            <p>For You</p>
            <p>Following</p>
            <p>Web Development</p>
            <p>Social Media</p>
            <p>Deep Learning</p>
            <p>React</p>
            <p>UX</p>
            <p>Coding</p>
            <button
              style={{
                border: "none",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                cursor: "pointer",
              }}
            >
              {" "}
              {">"}{" "}
            </button>
          </nav>
          <PostList />
        </div>
        <div className="borderRight"></div>
        <div>Staff Picks</div>
      </div>
    </div>
  );
}
