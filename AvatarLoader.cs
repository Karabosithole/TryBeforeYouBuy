using UnityEngine;

public class AvatarLoader : MonoBehaviour
{
    public GameObject avatarPrefab;
    public GameObject clothingPrefab;

    void Start()
    {
        // Load avatar
        GameObject avatar = Instantiate(avatarPrefab);
        avatar.transform.position = Vector3.zero;

        // Load clothing and attach it to the avatar
        GameObject clothing = Instantiate(clothingPrefab);
        clothing.transform.SetParent(avatar.transform);
        clothing.transform.localPosition = Vector3.zero;
    }
}
