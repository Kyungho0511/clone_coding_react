export default function AppWrap() {
  return (
    <div style={{display:"flex"}}>
      <Card color="orange">
        <Avatar
          image="https://images.unsplash.com/photo-1720440906281-b4367a242a86?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="giraffe"
          size={180}
        />
        <p>Giraffe</p>
      </Card>
      <Card color="grey">
        <Avatar
          image="https://images.unsplash.com/photo-1581281863883-2469417a1668?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="gorilla"
          size={180}
        />
        <p>Gorilla</p>
      </Card>
    </div>
  );
}

function Card({ children, color }: { children: React.ReactNode, color: string }) {
  return (
    <div style={{ backgroundColor: color, width: "300px", height: "300px", borderRadius: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontSize: "1.5rem", fontWeight: "bold", margin: "2rem" }}>
      {children}
    </div>
  );
}

function Avatar({ image, name, size }: AvatarProps) {
  return (
    <div>
      <img
        src={image}
        alt={name}
        width={size}
        height={size}
        style={{ borderRadius: "50%", marginTop: "2rem"}}
      />
    </div>
  );
}

type AvatarProps = {
  image: string;
  name: string;
  size: number;
};
