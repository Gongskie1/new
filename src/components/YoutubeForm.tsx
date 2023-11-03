
const YoutubeForm = () => {
  return (
    <>
      <div className="">
        <form action="" className="flex flex-col ">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" placeholder="username"/>

            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" placeholder="email"/>

            <label htmlFor="channel">Channel</label>
            <input type="text" id="channel" name="channel" placeholder="channel"/>

            <button      className="bg-slate-600">Submit</button>
      </form>
      </div>
    </>
  )
}

export default YoutubeForm
