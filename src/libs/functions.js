import { signIn } from "next-auth/react";

export const Authentication = async ({ data, setErrorMessage }) => {
  setErrorMessage("");
  try {
    const response = await signIn("credentials", {
      ...data,
      redirect: false,
    });
    if (response && response.status === 401) {
      setErrorMessage("NIM atau Password Anda salah");
    }
    const userData = response;
    return userData;
  } catch (error) {
    console.error("Error:", error);
  }
};

export async function getData({ uri }) {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_NEXT_API + uri, {
      cache: "no-store",
      next: {
        revalidate: 0,
      },
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const CreateData = async ({
  e,
  uri,
  data,
  setData,
  paginationModel,
  setPaginationModel,
  setModal,
  reset,
  setMessage,
  setLoading,
  setError,
}) => {
  const body = {
    ...e,
  };
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_NEXT_API + uri, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(body),
    });
    const response = await res.json();
    if (res.status == 200) {
      const page =
        data.totalData % paginationModel.pageSize == 0
          ? data.totalPages
          : data.totalPages - 1;
      const pageSize = paginationModel.pageSize;

      const dataFetch = await getData({
        uri: `${uri}?limit=${pageSize}&page=${page}`,
      });
      setData(dataFetch);
      setPaginationModel({ page: page, pageSize: pageSize });
      setModal(null);
      reset();
      setMessage(response.statusText);
    } else {
      setError(response.statusText);
    }
  } catch (error) {
    console.log("err", error);
  } finally {
    setLoading(false);
  }
};

export const UpdateData = async ({
  e,
  form,
  uri,
  setData,
  paginationModel,
  setPaginationModel,
  setModal,
  setMessage,
  setLoading,
  setError,
}) => {
  const body = {
    ...e,
  };
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_NEXT_API + `${uri}/${form._id}`,
      {
        method: "PUT",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(body),
      }
    );
    const response = await res.json();
    if (res.status == 200) {
      const dataFetch = await getData({
        uri: `${uri}?limit=${paginationModel.pageSize}&page=${paginationModel.page}`,
      });
      setData(dataFetch);
      setPaginationModel({
        page: paginationModel.page,
        pageSize: paginationModel.pageSize,
      });
      setModal(null);
      setMessage(response.statusText);
    } else {
      setError(response.statusText);
    }
  } catch (error) {
    console.log("err", error);
  } finally {
    setLoading(false);
  }
};

export const DeleteData = async ({
  id,
  uri,
  data,
  setData,
  paginationModel,
  setPaginationModel,
  setModal,
  setMessage,
  setLoading,
  setError,
}) => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_NEXT_API + `${uri}/?id=${id}`,
      {
        method: "DELETE",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const response = await res.json();
    if (res.status == 200) {
      const page =
        data.totalData % paginationModel.pageSize == 1
          ? data.totalPages - 2
          : data.totalPages - 1;
      const pageSize = paginationModel.pageSize;

      setPaginationModel({
        page: page,
        pageSize: pageSize,
      });
      const dataFetch = await getData({
        uri: `${uri}?limit=${pageSize}&page=${page}`,
      });
      setData(dataFetch);

      setModal(null);
      setMessage(response.statusText);
    } else {
      setError(response.statusText);
    }
  } catch (error) {
    console.log("err", error);
  } finally {
    setLoading(false);
  }
};

export const ChangePassword = async ({ uri, e, setMessage }) => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_NEXT_API + uri, {
      method: "PUT",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(e),
    });
    const response = await res.json();
    setMessage(response.statusText);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const VoteCandidate = async ({ uri, body, setMessage }) => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_NEXT_API + uri, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(body),
    });
    const response = await res.json();
    setMessage(response.statusText);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const SetSchedule = async ({ e, uri, setMessage }) => {
  const body = {
    ...e,
  };
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_NEXT_API + uri, {
      method: "PUT",
      cache: "no-store",
      next: {
        revalidate: 0,
      },
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(body),
    });
    const response = await res.json();
    setMessage(response.statusText);
    return response;
  } catch (error) {
    console.log(error);
  }
};
