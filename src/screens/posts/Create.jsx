import { BsImages } from "solid-icons/bs";
import CheckIn from "../../components/posts/create/CheckIn";
import Feelings from "../../components/posts/create/Feelings";
import ImageUpload from "../../components/shared/ImageUpload";
import SpecificFriends from "../../components/posts/create/SpecificFriends";
import TagPeople from "../../components/posts/create/TagPeople";
import useCreatePost from "../../hooks/useCreatePost";

export default function Create() {
  const {
    form,
    handleChange,
    handleInput,
    handleSubmit,
    addSpecificFriend,
    removeSpecificFriend,
    addTaggedFriend,
    removeTaggedFriend,
    addImage,
    removeImage,
    addFeeling,
    removeFeeling,
  } = useCreatePost();
  return (
    <div className="">
      <section className="max-w-md mx-auto bg-white dark:bg-gray-800  px-4 py-4  rounded-md shadow">
        <form onSubmit={[handleSubmit]} className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name">Post content</label>
            <textarea
              value={form.fields.content}
              onInput={[handleInput]}
              name="content"
              className="rounded-md dark:bg-gray-700"
              rows={5}
              placeholder="What`s on your mind Harsh ?"
            />
          </div>
          <div className="grid grid-cols-1  gap-2">
            <div className="flex flex-col space-y-2">
              <label htmlFor="audience">Post privacy</label>
              <select
                value={form.fields.audience}
                onInput={[handleChange]}
                name="audience"
                id="audience"
                className="rounded-md dark:bg-gray-700"
              >
                <option value="">Select</option>
                <option value="PUBLIC">Public</option>
                <option value="FRIENDS">Friends</option>
                <option value="ONLY_ME">Only me</option>
                <option value="SPECIFIC">Specific friends</option>
              </select>
            </div>

            <Show when={form.fields.audience === "SPECIFIC"}>
              <div>
                <SpecificFriends
                  friends={form.fields.specificAudienceFriends}
                  addFriend={addSpecificFriend}
                  removeFriend={removeSpecificFriend}
                />
              </div>
            </Show>
          </div>

          <div className="flex space-x-4 rounded-md border border-gray-400 dark:border-gray-600 px-2 py-2">
            <TagPeople
              friends={form.fields.taggedFriends}
              addFriend={addTaggedFriend}
              removeFriend={removeTaggedFriend}
            />
            <ImageUpload
              image={form.fields.image}
              addImage={addImage}
              removeImage={removeImage}
            >
              <BsImages className="text-green-500" />
            </ImageUpload>
            <Feelings
              feeling={form.fields.feeling}
              addFeeling={addFeeling}
              removeFeeling={removeFeeling}
            />
            <CheckIn checkIn={form.fields.checkIn} handleInput={handleInput} />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-3 bg-blue-500 text-white rounded-md text-lg"
            >
              Create
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
