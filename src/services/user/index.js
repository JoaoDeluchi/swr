import apiInstance from "../../config/http/api"
import { useApi } from "../../utils/Hooks/useApi"

export const useQueryGetUser = ({userName},
  options = {}
) =>
  useApi(
    `/users/${userName}`,
    apiInstance.get,
    { ...options }
  )

export const useQueryGetUserRepos = ({userName},
    options = {}
  ) =>
    useApi(
      `/users/${userName}/repos`,
      apiInstance.get,
      { ...options }
    )
  