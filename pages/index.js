import { Paper, Typography } from "@mui/material";
import Link from "next/link";
import Typewriter from "typewriter-effect"

export default function Index() {
  return (
    <>
      {/* Yeta suru ma dekhaune page banaune*/}
      <Paper
        elevation = {8}
        sx={{
          padding: 10,
          margin: 10,
          height: '50vh'
        }}
      >
        <Typography
          variant="h1"
          marginBottom={15}
        >
          <Typewriter
            options={{
              strings: [
                'Hello User!',
                'Good Day!',
                'from stock app',
              ],
              autoStart: true,
              loop: true,
              cursor: '|'
            }}
          />
        </Typography>
        <Link href="/login">Goto login</Link>
      </Paper>
    </>
  )
}
