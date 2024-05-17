import { MdWarning } from "react-icons/md";

const Error = () => {
  return (
    <div
      style={{
        backgroundColor: "#000",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MdWarning size={48} color="#F7DC6F" />
      <h1 style={{ color: "#fff", fontSize: 24, marginLeft: 16 }}>
        Page Not Found
      </h1>
    </div>
  );
};

export default Error;
