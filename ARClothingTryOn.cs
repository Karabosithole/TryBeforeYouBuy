using UnityEngine;
using UnityEngine.XR.ARFoundation;

public class ARClothingTryOn : MonoBehaviour
{
    private ARRaycastManager raycastManager;

    void Start()
    {
        raycastManager = GetComponent<ARRaycastManager>();
    }

    void Update()
    {
        if (Input.touchCount > 0)
        {
            var touch = Input.GetTouch(0);
            if (touch.phase == TouchPhase.Began)
            {
                PlaceClothing(touch.position);
            }
        }
    }

    private void PlaceClothing(Vector2 touchPosition)
    {
        // Raycast to find placement point in the real world
        List<ARRaycastHit> hits = new List<ARRaycastHit>();
        if (raycastManager.Raycast(touchPosition, hits, TrackableType.PlaneWithinPolygon))
        {
            var hitPose = hits[0].pose;

            // Instantiate clothing prefab at the hit point
            GameObject clothing = Instantiate(clothingPrefab, hitPose.position, hitPose.rotation);
        }
    }
}
